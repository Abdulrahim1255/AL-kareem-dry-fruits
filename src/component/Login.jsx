import { React, useState,useMemo } from 'react'
import './login.css'
const Login = () => {
  const [name, setName] = useState('')
  const [email, setEamail] = useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email)

  }
  return (
    <div >

      <div className='main'>
      <h1 >Login </h1>
        <form action="" onSubmit={handleSubmit}>

          <div className='name'>
            <label htmlFor="">Name</label>
            <input type="text"   placeholder='Enter your  Name'  className='input' onChange={(e)=>setName(e.target.value)}/></div>
          <div className='name'>
            <label htmlFor="">Email</label>
            <input type="email" className='input' placeholder='Enter Your Email'  onChange ={(e)=>setEamail(e.target.value)} /></div>

            <div className='name' >
              <label htmlFor="">Password</label>
              <input type="password" className='input'  placeholder='Enter your Password'  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='name'>

          <button className='btn'>Login</button>
            </div>
        </form>
      </div>


    </div>
  )
}

export default  Login