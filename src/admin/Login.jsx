import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Input} from '@mui/material';
import {AiOutlineGooglePlus,AiFillFacebook} from 'react-icons/ai'
const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30rem",
    borderRadius:"1rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function Login() {
  

  return (
    <form>
    <Box sx={style} >
    <h1 className='text-center text-3xl mb-4 text-gray-500'> welcome to Epasal</h1>
        <section className='flex justify-end'>
            <h2 className='w-full text-center text-xl text-gray-500 font-sans hover:font-serif'>Sign In</h2>
        </section>
        <section className=' w-full'>
         
          <Input className=' mt-8 w-full'  placeholder=' Email*' type='email' required/>
          <Input className=' mt-8 w-full'  placeholder=' Password*' type='password' required/>
          <section className='mt-8 flex justify-center'>
              {/* <Button onClick={props.clickHandler} > Cancel</Button> */}
              <Button variant='outlined' type='submit'> Sign In</Button>
          </section>
        </section>
      </Box>
      </form>
  );
}