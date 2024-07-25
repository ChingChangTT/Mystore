import { useState, useEffect } from 'react';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('http://136.228.158.126:50003/api/contents/all_content/')
      .then((res) => {
        return res.json();
      })
      .then((datas) => {
        console.log(datas.data);
        setPhotos(datas.data);
      });
  }, []);
  return (
    <div className='w-full flex flex-wrap gap-5'>
      {
        photos.map((test,index)=> {
          return (
            <div key={index}>
              <img src={test.thumbnail} alt={test.title} />
              <h1 >{test.title}</h1>
            </div>
          
        )})
      }
      {/* <h1>{photos.title}</h1> */}
    </div>
  );
};
export default Fetch;