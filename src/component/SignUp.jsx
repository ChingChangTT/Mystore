import { useState, useEffect } from 'react';
import SkeletonLoader from './Sketleton/SkeletonSignUp';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useAuth } from './AuthContext';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setSignupDetails, checkEmailExists } = useAuth();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setUsernameError('');
    setEmailError('');
    setPasswordError('');

    // Validate username
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Check if email is already registered
    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setEmailError('Email is already registered');
        setAlertMessage('Email is already registered');
        setAlertSeverity('error');
        return;
      }
    } catch (error) {
      console.error('Error checking email:', error);
      setAlertMessage('There was an error checking the email');
      setAlertSeverity('error');
      // navigate('/User')
      return;
    }
    // if (!checkEmailExists(email)) {
    //   setEmailError('Email is already registered');
    //   setAlertMessage('Email is already registered');
    //   setAlertSeverity('error');
    //   navigate('/User')
    //   return;
    // }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    // If validation passes
    setAlertMessage('Sign up successful!');
    setAlertSeverity('success');
    // setSignupDetails({ email, password });
    setSignupDetails((prevDetails) => [...prevDetails, { email, password }]);
    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');

    // Navigate after a short delay to show the success alert
    setTimeout(() => {
      navigate('/User');
    }, 1000); // Adjust delay as needed
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="w-4/5 m-auto mt-24">
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <img
              src="https://i.pinimg.com/564x/83/4a/67/834a67b7a18094ddfdacc50059f2e68c.jpg"
              alt="sign up"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
        {/* Right Pane */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
              Sign Up
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Join our Community with all-time access and free{' '}
            </h1>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4"
                    id="google"
                  >
                    <path
                      fill="#fbbb00"
                      d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                    />
                    <path
                      fill="#518ef8"
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                    />
                    <path
                      fill="#28b446"
                      d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                    />
                    <path
                      fill="#f14336"
                      d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                    />
                  </svg>{' '}
                  <Link to="https://accounts.google.com/v3/signin/challenge/pwd?TL=ALoj5ArktXhCnY2G1im4NBQtBSXz5E4ZhcO9ZxHQmUPmr48wDsu-trp9hWlM2v3G&checkConnection=youtube%3A169&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ddm=0&ec=asw-gmail-globalnav-signin&flowEntry=AccountChooser&flowName=GlifWebSignIn&hl=km&pstMsg=1&service=mail">
                    Sign Up with Google{' '}
                  </Link>
                </button>
              </div>
              <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="github"
                    className="w-4"
                  >
                    <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.075.546-.178.546-.385 0-.192-.007-.698-.01-1.37-2.233.485-2.702-.555-2.86-1.066-.097-.24-.51-1.066-.88-1.292-.303-.183-.735-.631-.01-.645.683-.012 1.174.648 1.35.927.778 1.315 1.59.936 2.158.716.065-.563.308-.936.56-1.15-1.669-.188-3.419-.834-3.419-3.709 0-.817.292-1.488.77-2.015-.078-.191-.334-1.084.072-2.255 0 0 .657-.209 2.156.81.654-.181 1.363-.272 2.062-.276.699.003 1.411.095 2.077.278 1.518-1.029 2.169-.814 2.169-.814.387 1.17.155 2.044.08 2.235.471.522.759 1.16.759 1.977 0 2.897-1.673 3.533-3.39 3.727.336.295.636.878.636 1.768 0 1.274-.011 2.302-.011 2.612 0 .209.146.463.55.384A8.033 8.033 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                  </svg>{' '}
                  <Link to="https://github.com/">Sign Up with Github</Link>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 mt-4">
                <label
                  htmlFor="username"
                  className="block mb-1 font-semibold text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full p-2 border ${
                    usernameError ? 'border-red-500' : 'border-gray-300'
                  } rounded-md`}
                  required
                />
                {usernameError && (
                  <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                )}
              </div>
              <div className="mb-4 mt-4">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div className="mb-6 mt-4">
                <label
                  htmlFor="password"
                  className="block mb-1 font-semibold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-2 border ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                  } rounded-md`}
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Sign Up
              </button>
            </form>
            {alertMessage && (
              <Alert severity={alertSeverity} className="mt-4">
                {alertMessage}
              </Alert>
            )}
            <p className="mt-4 text-gray-600 text-center">
              Already have an account?{' '}
              <Link to="/Login" className="text-blue-600">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
