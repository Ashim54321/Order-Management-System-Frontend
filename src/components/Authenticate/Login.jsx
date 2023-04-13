import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Input} from '@mui/material';
import {AiOutlineGooglePlus,AiFillFacebook} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "36rem",
    borderRadius:"1rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 8,
  };

export default function Login(props) {
 

 const[email,setEmail] = React.useState("");
 const[password,setpassword] = React.useState("");

 

  

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
    const res = await axios.post(`http://localhost:5000/auth/authenticate`,{
      email,
      password
    })
    if(res.data.status === "success"){
      const data = res.data
      localStorage.setItem("auth_token",data.Token)
      props.clickHandler()
    }  
    }catch(err){
      throw err
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={style} >
        <section className='flex justify-end'>
            <h2 className='w-11/12 text-start text-2xl text-black-500 font-sans hover:font-serif'>Sign In</h2>
            <Button onClick={props.clickHandler} sx={{height:"40px",color:"black"}} >X</Button>
        </section>
        <section className=' w-full'>
         
          <Input className=' mt-8 w-full'  placeholder=' Email*' type='email' 
            onChange={(e)=>setEmail(e.target.value)}
          required/>
          <Input className=' mt-8 w-full'  placeholder=' Password*' type='password'
          onChange={(e)=>setpassword(e.target.value)}
          required/>
          <section className='mt-8 flex justify-center'>
              {/* <Button onClick={props.clickHandler} > Cancel</Button> */}
              <Button sx={{width:"12rem",border:"1px solid black",color:"black",fontSize:"15px"}} type='submit'> Sign In</Button>
          </section>
          <h5 className='text-center mt-4'>Don't have a Account ? <a onClick={props.register} className='text-blue-500 underline-offset-auto cursor-pointer	'> Create account</a></h5>
          <h1 className='text-center mt-4'>OR</h1>
          <section className='mt-4 flex justify-center'>
              <Button sx={{width:"auto",marginRight:"0.5rem",border:"1px solid black",color:"black",fontSize:"12px"}}> <AiOutlineGooglePlus size={30} style={{marginRight:"15px",marginLeft:"15px"}}/> sign in with Google</Button>
              <Button sx={{width:"auto",border:"1px solid black",color:"black",fontSize:"12px"}}><FiFacebook style={{marginRight:"8px",marginLeft:"8px"}}/> sign in with Facebook</Button>
          </section>
        </section>
      </Box>
      </form>
  );
}