import React from 'react'
import { Button } from 'react-bootstrap'
export default function FeatureComponent1() {
  return (
    <div style={{ padding: '1px' }} >
    <div className='container my-4' style={{ fontFamily: "Fraunces" }} >
        <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='col-12 col-md-5'>
                <img src={"./images/feature1.png"} style={{ width: '100%', float: 'right' }}  alt='' />
            </div>
        <div className='col-12 col-md-7 ps-sm-5' style={{display:'fllex', alignSelf:'center'}}>
        <p style={{fontFamily:'Alfa Slab One',fontSize:'50px' }} className='mt-5 mb-5'>Reliable</p>
        <p style={{fontFamily:'Poppins'}} className='my-4'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
        <Button style={{backgroundColor:'#10AB61',width:'45%',padding:'10px',border:'none'}} >Take a Free Demo</Button>
        </div>
          
        </div>
    </div>
</div>
  )
}
