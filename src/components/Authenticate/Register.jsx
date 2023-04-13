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

export default function Register(props) {
  const [firstName,setFirstName] = React.useState('');
  const [lastName,setLastName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [password,setPassword] = React.useState('');

  const handleSubmit =  async(e) =>{
     e.preventDefault()
     try{
       const res = await axios.post('http://localhost:5000/auth/register',{
        firstName,
        lastName,
        email,
        phone,
        password
       })
       if(res.status == 201){
        alert("sucess")
        props.clickHandler()
       }
     }catch(e){
      throw e
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={style} >
          <section className='flex justify-end'>
              <h2 className='w-11/12 text-start text-2xl text-black-500 font-sans hover:font-serif'>Create a account</h2>
              <Button onClick={props.clickHandler} sx={{height:"40px",color:"black"}} >X</Button>
          </section>
          <section className=' w-full'>
            <section className='flex justify-between'>
            <Input className='mt-8 w-auto' placeholder=' FirstName*' type='text' value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}
             required />
            <Input className=' mt-8 w-auto' placeholder=' Lastname*' type='text' value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            required/>
            </section>
            <Input className=' mt-8 w-full nabin'  placeholder=' Email*' type='email' value={email}
               onChange={(e)=>setEmail(e.target.value)}
            required />
            <Input className='mt-8 w-full '  placeholder=' Phone*' type='number' value={phone}
               onChange={(e)=>setPhone(e.target.value)}
            required/>
            <Input className=' mt-8 w-full'  placeholder=' Password*' type='password' value={password}
              onChange={(e)=>setPassword(e.target.value)}
            required/>
            <section className='mt-8 flex justify-center'>
                {/* <Button onClick={props.clickHandler} > Cancel</Button> */}
                <Button sx={{width:"15rem",border:"1px solid black",color:"black",fontSize:"15px"}} type='submit'> Create Account</Button>
            </section>
            <h5 className='text-center mt-4'>Already have a Account ? <a onClick={props.log} className='text-blue-500 underline-offset-auto cursor-pointer	'>sign in</a></h5>
            <h1 className='text-center mt-4'>OR</h1>
            <section className='mt-4 flex justify-around'>
                <Button  sx={{width:"auto",marginRight:"0.5rem",border:"1px solid black",color:"black",fontSize:"12px"}}> <AiOutlineGooglePlus size={25} style={{marginRight:"15px",marginLeft:"15px"}}/>Sign up with google</Button>
                <Button sx={{width:"auto",border:"1px solid black",color:"black",fontSize:"12px"}} ><FiFacebook size={25} style={{marginRight:"8px",marginLeft:"8px"}}/>Sign up with Facebook</Button>
            </section>
          </section>
        </Box>
        </form>
  );
}