import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Api from './api';

const App = () => {
  const [ipadress,setIpadress]=useState('')

  
  return (
    <>
    <div className="container">
    
    <div className="row height-100 d-flex justify-content-center align-items-center">
        
        <div className="col-md-8">
            
            <div className="search position-relative">
                <input className="form-control" value={ipadress} onChange={(e)=>{
                   setIpadress(e.target.value)
  
                }} placeholder="IP Adress" />
                
                <Api ip={ipadress} />
            </div>
            
        </div>
        
    </div>
    
</div>
    </>
  );
}

export default App;
