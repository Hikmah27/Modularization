import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const signin = () => {
    // axios.post("http://localhost:4000/user/signin", { email, password })
    axios.post("https://backend-project-qzqs.onrender.com/user/signin", { email, password })
    .then ((response)=>{
      if (response.data.status) {
        localStorage.token = response.data.token
        navigate("/dashboard")
      }
      else {
        console.log("Wrong Credentials");
      }
    })
  }
  return (
    <div>
        <div className="mx-auto shadow-sm col-lg-5 col-md-5 shadow mt-5">
        <div className="row">
          <h1 className="text-center text-dark mb-3">SIGN IN</h1>
        </div>
        <div className="form-floating mb-3 col-5 w-100">
          <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email">Enter Your Email</label>
        </div>
        <div className="form-floating mb-3 col-5 w-100">
          <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password">Enter Your Password</label>
        </div>
        <div className="form-group mb-3">
          <button onClick={signin} className="btn btn-success text-white w-100" >Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Signin