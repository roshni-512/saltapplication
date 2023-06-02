import React from 'react'

export default function FeatureCompoent() {
  return (
    <div >
      <div className="container mt-5 mb-5">
        <div className="row ">
            <div className="col-12"style={{fontFamily:'Alfa Slab One',fontSize:'80px' }}>More agile than a </div>
        </div>
        <div className="row d-flex justify content-between">
            <div className="col-6"style={{fontFamily:'Alfa Slab One',fontSize:'60px' }}>traditional <span style={{fontFamily:'Alfa Slab One',fontSize:'70px' }}>Software</span> <span style={{fontFamily:'Alfa Slab One',fontSize:'30px' }}>more</span></div>
            <div className="col-6 col-md-5 p-0 d-none d-md-block">  <img src={"./images/snapshot.png"} style={{width:'70%',float:'right'}}  alt=''/></div>
        </div>
        <div className="row">
            <div className="col-12"style={{fontFamily:'Alfa Slab One',fontSize:'80px' }}>human than an AI</div>
        </div>
      </div>
    </div>
  )
}
