import { useFormik } from 'formik';
import React from 'react'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit:(values)=>{
            axios.post("http://localhost:4000/user/signup", {firstName, lastName, email, password})
            console.log( firstName, lastName, email, password);
            console.log(values);
            // axios.post(url,)
        },
        validate:(values)=>{
            let errors = {}
            if (!values.firstName) {
                errors.firstName='Required'
            }
            if (!values.lastName) {
                errors.lastName='Required'
            }
            if (!values.email) {
                errors.email='Required'
            }  
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password='Required'
            }
            return errors
        }
    })
    // console.log(formik);

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="flex items-center justify-center flex-col my-10">
                <h1 className="text-center mb-3">SIGN UP</h1>
                <input type="text" className="rounded-md p-3 border-red-200 border my-2 w-80" name="firstName" placeholder='Enter Your First Name' onChange={formik.handleChange} />
                <span>{formik.errors.firstName}</span>
                <input type="text" className="rounded-md p-3 border-red-200 border my-2 w-80" name="lastName" placeholder='Enter Your last Name' onChange={formik.handleChange} />
                <span>{formik.errors.lastName}</span>
                <input type="email" className="rounded-md p-3 border-red-200 border my-2 w-80" name='email' placeholder='Enter Your Email' onChange={formik.handleChange} />
                <span>{formik.errors.email}</span>
                <input type="password" className="rounded-md p-3 border-red-200 border my-2 w-80" name='password' placeholder='Enter Your Password' onChange={formik.handleChange} />
                <span>{formik.errors.password}</span>
                <button className="px-20 p-3 rounded-md bg-gray-900 text-white my-5">Submit</button>
            </form>
        </div>
    )
}

export default Formik