import React from 'react'
import { Button } from 'react-bootstrap'

export default function CommitmentComponent() {
  return (
    <div style={{backgroundColor:'#88D5B0'}}>
    <div className="container">
       <div className="row d-flex justify-content-around">
       
               <div className='col-12 col-md-5 mt-5 mb-5' >
               <p style={{ fontFamily: 'Alfa Slab One', fontSize: '50px' }}>What you get <br/>so far </p>
                <p >Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
                <Button  variant='dark' className='mt-2' style={{width:'45%',padding:'10px'}}>Take a Free Demo </Button>
               </div>
               <div className='col-12 col-md-5 mt-5 mb-5'>
               <div> <img src={"./images/rimage1.png"} alt =''style={{width:'10%',height:'50px',borderRadius:'5px',border:'5px white solid'}} /> Approved by the ACPR(Banque de france)</div>
                <div> <img src={"./images/rimage2.png"} alt='' style={{width:'10%',height:'50px',borderRadius:'5px',border:'5px white solid'}}className='mt-2'/> Mastercard network</div>
               <div> <img src={"./images/rimage3.png"} alt ='' style={{width:'10%',height:'50px',borderRadius:'5px',border:'5px white solid'}}className='mt-2'/> Funds secured according to French regulations</div>
               <div> <img src={"./images/rimage4.png"} alt ='' style={{width:'10%',height:'50px',borderRadius:'5px',border:'5px white solid'}}className='mt-2'/> Your data is encrypted and protected</div>
                <div> <img src={"./images/rimage5.png"} alt ='' style={{width:'10%',height:'50px',borderRadius:'5px',border:'5px white solid'}}className='mt-2'/>Independent subsidiary of Société Générale</div>  
               </div>
               </div>
       </div> 
   </div>
  )
}
