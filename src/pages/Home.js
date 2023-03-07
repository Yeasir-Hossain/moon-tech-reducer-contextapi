import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;