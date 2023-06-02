import React from 'react'
import { Button } from 'react-bootstrap'

export default function FeatureComponent2() {
  return (
    <div style={{ padding: '1px' }} >
            <div className='container my-4' style={{ fontFamily: "Fraunces" }} >
                <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div  className='col-12 col-md-7 ps-sm-5 order-lg-first order-last' style={{display:'fllex', alignSelf:'center'}}>
                <p style={{fontFamily:'Alfa Slab One',fontSize:'50px' }} className='my-5'>Secure</p>
                <p style={{fontFamily:'Poppins'}} className='my-4'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                <Button style={{backgroundColor:'#10AB61',width:'45%',padding:'10px',border:'none'}} className='my-5'>Take a Free Demo</Button>
                </div>
                    <div  className='col-12 col-md-5 order-md-first order-sm-first'>
                        <img src={"./images/feature2.png"} style={{ width: '100%', float: 'right' }}  alt='' />
                    </div>
                </div>
            </div>
        </div>
  )
}
