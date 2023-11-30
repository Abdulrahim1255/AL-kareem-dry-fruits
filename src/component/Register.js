import React, { useState } from 'react'
import './register.css'
const Register = () => {
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })

 const handleChange =(e)=>{
setUser({...user,[e.target.name]:e.target.value})
 }


  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <div >
      <div className='form'>
        <h2>Register </h2>
      <form onSubmit={handleSubmit}>
      <div className='form'>
        <label>
          Name
          <input onChange={handleChange} value={user.name} name='name ' className='input'/>
        </label>
      </div>
      <div className='form'>
        <label>Email</label>
         <input onChange={handleChange} value={user.email} name='email' className='input'/>
      </div>

      <div className='form'>
        <label>
          password
        </label>
        <input  onChange={handleChange}  value={user.password} name='password'className='input' />
        <div >

        <button className='btn'>Register</button>
        </div>
      </div>
      </form>
      </div>
      

    </div>
  )
}

export default Register