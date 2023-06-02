import React from 'react'
import './Footer.css'
export default function FooterComponent() {
  return (
    <div style={{ backgroundColor: "#10AB61"}}>
    <div className="container ">
      <div className="row d-flex justify-content-around ">
        <div className="col-sm-3 col-12 d-flex" id='logo'><img
              src="./images/saltlogo.png"
              width="30"
              height="30"
              className="mt-4 "
              alt=""
              />
               <div>
              <p className='mt-4 my-3 mx-3 ' style={{fontFamily:'Sarina', fontSize:'20px',fontStyle:'italic',fontWeight:900,color:'white'}}>Salt</p>
              </div>
              </div>
        <div className="col-sm-6 col-12 me-auto  mt-4 mb-4  col-md-6" id='info' >
               <a href="#action1" className='mx-2' style={{color:'white'}}>Welcome</a>
               <a href="#action2"  className='mx-3' style={{color:'white'}}>Terms of use</a>
              <a href="#action3"   className='mx-3' style={{color:'white'}}>Data Protection</a>
              <a href="#action2"  className='mx-3' style={{color:'white'}}>Terms of use</a>
              <a href="#action3"   className='mx-3' style={{color:'white'}}>Data Protection</a>
             </div>
        <div className="col-sm-3 col-12 mt-3 mb-3 " id='social-links' >  
       
            <img src={"./Images/Linkedin (1).png"} style={{width:'15%'}} alt=''/>
            <img src={"./Images/Facebook (1).png"} style={{width:'15%'}}  alt=''/>
            <img src={"./Images/Twitter (1).png"} style={{width:'15%'}}  alt=''/>
             </div>
      </div>
       </div>
  </div>
  )
}
