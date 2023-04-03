import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Cards from './Cards'

function PopularCatagory() {
  return (
    <section className='mb-8'>
    <section className='h-32 flex justify-start items-center px-4 '>
         <h4 className='text-4xl font-medium text-black-500 w-2/4 '> Trending</h4>
         <section className='w-2/4 flex justify-end'>
         <Button variant='outlined' className='text-gray-500'>View all</Button>
         </section>
    </section>
    <Grid container spacing={4} className='px-4'>
        <Grid item  sm={12} md={8} lg={4}>
        <Cards name="Nike Air Max 90 Futura" description="this is a test card" gender="Male" img="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5340ba0a-06e8-4d98-9f9c-75f5fc044c65/air-max-90-futura-womens-shoes-kvRZ4h.png"/>
        </Grid>
        <Grid item sm={12} lg={4}>
        <Cards name="Nike Air Max 90" description="this is a test card" gender="Female" img="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6194c58f-6b5f-4ebe-975c-8bf34acb9c94/air-max-90-womens-shoes-2ZsM2w.png"/>
        </Grid>
        <Grid item sm={12} lg={4}>
        <Cards name="Nike Air Max 90" description="this is a test card" gender="Male" img="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/68b1d9b7-4b7f-4068-ba8a-7dfd72bfb580/air-max-90-mens-shoes-JdKKmQ.png"/>
        </Grid>
    </Grid>
    </section>
  )
}

export default PopularCatagory