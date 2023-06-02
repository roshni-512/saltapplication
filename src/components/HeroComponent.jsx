import React from 'react'
import "@fontsource/alfa-slab-one";
import { Button } from 'react-bootstrap'
import './Style.css'
export default function HeroComponent() {
  return (
    <div style={{overflow:'hidden',width:'100%'}}>
     <div className="container">
        <div className="row d-flex justify-content-around">
           <div className='col-12 col-md-5 mt-5 mb-5' >
              <p style={{fontFamily:'Alfa Slab One',fontSize:'80px' }}>Welcome to SALT APK.</p> 
              <p>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
              <Button variant='dark'  style={{width:'45%',backgroundColor:' #10AB61',padding:'10px',border:'none'}} id='btn'>Take a Free Demo</Button>
              <Button variant='dark' className='mx-2' style={{width:'45%',padding:'10px',border:'none'}} > Book a call</Button>
              <img src={"./images/services.png"} style={{width:'100%', float:'left'}} className=' w-sm-100 mt-3 ' alt=''/>
                </div>
                <div className='col-12 col-md-5  mt-5 mb-5'>
                    <img src={"./images/Screenshot1.png"} style={{width:'100%', float:'left'}} className=' w-sm-100 ' alt=''/>
                </div>
                </div>
                </div>
    </div>
  )
}
