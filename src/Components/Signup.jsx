import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allDetails, setallDetails] = useState([])

    const [message, setMessage] = useState("")
    // let url = "http://localhost:5000/user/signup"

    const Submit = () => {
        // store into an object
        // let loginDetails = { firstName, lastName, email, password }
        // push the object in the array using spread operator
        // setallDetails([...allDetails, loginDetails])
        // console.log(allDetails);
        axios.post("http://localhost:4000/user/signup", {firstName, lastName, email, password})
        console.log( firstName, lastName, email, password);
        // axios.post(endpoint, loginDetails).then((response)=>{
        //     console.log(response.data);
        //     setmessage(response.data.message)
        // })
    }
 
    return (
        <div>
                <div className="mx-auto shadow-sm col-lg-5 col-md-5 shadow mt-5">
                    <div className="row">
                        {/* <div className={message==""?"":"alert alert-success"}>{message}</div> */}
                        <h1 className="text-center text-dark mb-3">SIGN UP</h1>
                    </div>
                    <div className="form-floating mb-3 col-5 w-100">
                        <input type="text" className="form-control" name="FirstName" onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="First Name">Enter Your First Name</label>
                    </div>
                    <div className="form-floating mb-3 col-5 w-100">
                        <input type="text" className="form-control" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="Last Name">Enter Your last Name</label>
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
                        <Link to="/signin" className="btn btn-success text-white w-100" onClick={Submit}>Sign Up</Link>
                    </div>
                </div>

            {/* <div className='col-8 mx-auto mt-4'>
                <table className='table table-stripped'>
                    <thead>
                        <tr className='table-primary'>
                            <th>S/N</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {
                        allDetails.map((items, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{items.firstName}</td>
                                    <td>{items.lastName}</td>
                                    <td>{items.email}</td>
                                    <td>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                        <button className='btn btn-warning'>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div> */}
        </div>
    )
}

export default Signup