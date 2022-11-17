import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../../Home'
let NavBar = () => {
    return (
        <>
        <nav className='navbar bg-dark navbar-expand-lg'>
            <div className="container"> 
            <div className="row">
                <div className="col-md-12">
                <Link to={'/'} className="navbar-brand">
            <p className="h3 text-white fw-bold" style={{textAlign:"center",marginLeft:'100px',fontFamily:"timesnew roman",fontSize:'40px'}}>
                    ONLINE ADMISSION MANAGEMENT SYSTEM
                    </p> </Link>
                </div>
                <div className="row"><div className="col-md-2">
                <Link to={'/contacts/add'} className="btn btn-success  text-light" style={{marginLeft:'0px'}} >New admission</Link>
                </div>
               
                <div className="col-md-3">
                <Link to={'/contacts/list'} className="btn btn-primary md-1 text-light" style={{marginRight:'0px'}} >List</Link>
                </div></div>
                
            </div>
            
                
                   
                   
                    
             </div>
             
             
             
        </nav>
        
        </>
    )
};
export default NavBar;