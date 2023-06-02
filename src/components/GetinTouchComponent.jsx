import React from 'react'
import { MdOutlineCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function GetinTouchComponent() {
  return (
    <div  style={{ backgroundColor: "#88D5B0", padding: '1px' }}>
    <div className="container">
       <div className="row d-flex justify-content-around">
       
               <div className='col-12 col-md-5 mt-5 mb-5' >
             <p style={{fontFamily:'Alfa Slab One',fontSize:'60px' }}>Take a  Free Demo!</p>
             <p style={{fontWeight:'800' }}><MdOutlineCall style={{color:'#10AB61',backgroundColor:'white',borderRadius:'30px',width:'5%'}}className='text-center'/> +91-9090909090</p>
             <p style={{fontWeight:'800'}}><MdEmail style={{color:'#10AB61',backgroundColor:'white',borderRadius:'30px',width:'5%'}}className='text-center'/> info@roini.com</p>
             <Button className='mt-2' variant='dark' style={{width:'50%',border:'none'}}>Book a Call</Button>
               </div>
               <div className='col-12 col-md-5  mb-5'>
               <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Your Name" />
                    </Form.Group>
                          <Row className='mt-3'>
                          <Col>
                     <Form.Control placeholder="Your email" />
                        </Col>
                         <Col>
                   <Form.Control placeholder="Your Phone" />
                        </Col>
                        </Row>
                     <Row className='mt-3'>
                     <Col>
                    <Form.Control placeholder="Your Company"  />
                      </Col>
                      <Col>
                           <Form.Control placeholder="Your position/role" />
                      </Col>
                      
                            </Row>
                            <Col>
     
                        <Form.Control
                          as="textarea"
                            placeholder="Drop a line"
                            style={{ height: '100px' }} className='mt-3'/>
                            
                      </Col>
                      <Col>
                      <Button className='mt-3' style={{width:'100%',backgroundColor:'#10AB61',border:'none'}}>Send</Button>
                      </Col>
                        </Form>
               </div>
               </div>
       </div> 
   </div>
  )
}
