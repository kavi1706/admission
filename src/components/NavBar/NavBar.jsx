import React from 'react';
import {Link} from 'react-router-dom';
let NavBar = () => {
    return (
        <>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="container"> 
            <Link to={'/'} className="navbar-brand">
                <i className="fa fa-comments text-warning"/>  COMPLAINT  <span className="text-warning ">MANAGMENT</span> </Link>
             </div>
             
             <Link to={'/contacts/add'} className="btn btn-dark ms-2 text-warning" >create</Link>
             
        </nav>
        </>
    )
};
export default NavBar;