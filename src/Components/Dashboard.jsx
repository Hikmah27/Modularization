import React, {useEffect} from 'react';
import axios, {Axios} from 'axios';

const Dashboard = () => {
  useEffect(() => {
  //  let URL = "http://localhost:4000/user/dashboard";
   let URI = "https://backend-project-qzqs.onrender.com/user/dashboard"
  let token = localStorage.token
  axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then((response)=>{
    if (response === status) {
      console.log("welcome");
    } else {

    }
    // navigate("/signin");
  });
  }, []);
  
  return (
    <div>This is a Dashboard page</div>
  )
}

export default Dashboard