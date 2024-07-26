import { useState, useEffect } from "react";
import LogInSkeleton from "./Sketleton/SketletonLog";
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { checkCredentials } = useAuth();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log email and password for debugging
    console.log('Login attempt with email:', email, 'and password:', password);
    
    if (checkCredentials(email, password)) {
      console.log('Login successful');
      setAlertMessage('Login successful!');
      setAlertSeverity('success');

      // Navigate to user page after a short delay to show the success alert
      setTimeout(() => {
        navigate('/User');
      }, 1000);
    } else {
      console.log('Login failed');
      setAlertMessage('Wrong email or password');
      setAlertSeverity('error');
    }
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Adjust timeout as needed
  }, []);

  if (loading) {
    return <LogInSkeleton />;
  }

  return (
    <div className="w-4/5 m-auto mt-24">
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .circles {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            .circles li {
              position: absolute;
              display: block;
              list-style: none;
              width: 20px;
              height: 20px;
              background: rgba(255, 255, 255, 0.2);
              animation: animate 25s linear infinite;
              bottom: -150px;
            }
            /* Add the rest of your styles here */
          `
        }}
      />
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
            }}
          >
            <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0" />
            <div className="w-full max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Reference site about Lorem Ipsum..
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                and typesetting industry Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s when an unknown printer
                took a galley of type and scrambled it to make a type specimen book
                it has?
              </div>
            </div>
            <ul className="circles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>
              <div className="flex flex-row justify-center items-center space-x-3">
                <a
                  href="https://www.behance.net/ajeeshmon"
                  target="_blank"
                  className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <img
                    className="w-4 h-4"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                  />
                </a>
                <a
                  href="https://twitter.com/ajeemon?lang=en"
                  target="_blank"
                  className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <img
                    className="w-4 h-4"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1zbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHh0b2Y9ImJhc2ljIj4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0yLjYyMSw0LjI0MyBDMi44MiwzLjI5NiwyLjQ4NSwyLjAyMiwyLjU3OSwyLjAxNkMzLjc2NywyLjA4NywyLjI5MSwyLjYyMSw0LjI0MywyLjYyMVoiIGZpbGw9InJnYSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYyMCAxNjIgMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYyMCAxNjIgMCIvPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xMi40OTUsMi4xNDkgQzEyLjQ5NSw2LjI0MSwxNi4wODcsMTEuNjY3LDEzLjY2NywxMy42NjFDMjAuNTYzLDExLjY2NywyNy41NzIsNi4yNDEsMTIuNDk1LDIuMTQ5WiIgZmlsbD0id2hpdGUiLz4KPC9nPjwvc3ZnPg=="
                  />
                </a>
                <a
                  href="https://github.com/ajeeshmon"
                  target="_blank"
                  className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-gray-800 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <img
                    className="w-4 h-4"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHh0b2Y9ImJhc2ljIj4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0zNy43NiwxMC4yMzQgQzM3LjczMywxMC4yMzQsMzkuMTY3LDE4LjIzNSwzNy43NiwxOC4yMzQiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                  />
                </a>
              </div>
              {alertMessage && (
                <Alert severity={alertSeverity} onClose={() => setAlertMessage('')}>
                  {alertMessage}
                </Alert>
              )}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-700"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
