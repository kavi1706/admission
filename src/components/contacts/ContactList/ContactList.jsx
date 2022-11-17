
import {Link} from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from "axios";
// import Home from '../../../Home'
const ContactList= ()=>{
    const [users,setUsers]=useState(null)
    const [dis,setDis]=useState(false)
    const getData = async()=>{
        const {data}=await axios.get('http://localhost:8080/all')
        console.log(data)
        setUsers(data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
            if(users!=null){
                setDis(true)
            }
    },[users])

    const deleteCategory =async(e,id)=>{
        e.preventDefault()
        await axios.delete(`http://localhost:8080/${id}`)
        setDis(false)
        const {data}=await axios.get('http://localhost:8080/all')
        
        setUsers(data)

    }
    return(
       
        <div>
            {/* <Home /> */}
            {dis && <div>
                {users.map(m=>(
                    <section className='contact-list'>
                        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                    <div className="card-body">
                    <div key={m._id}>
                   
                    </div>
                                 <div className="row  ">
                                 
                                 <div className="col-md-6">
                                     <ul className=''>
                                         <li className=' fw-bold'>
                                             Name: <span className='fw-bold text-primary'>{m.name}</span>
                                         </li>
                                         <li className=' fw-bold'>
                                             SSLC Score: <span className='fw-bold text-primary'>{m.sslc}</span>
                                         </li>
                                         <li className=' fw-bold'>
                                             HSC Score: <span className='fw-bold text-primary'>{m.hsc}</span>
                                         </li>
                                     </ul>
                                 </div>
                                 
                                
                                 
                                 </div>
                               <div className="row">
                               <div className="col-md-2"><Link  to={`/contacts/view/${m._id}`}className='btn btn-primary my-1'>
                                          Details
                                        </Link></div>
                               

                                        
                                        <div className="col-md-2">
                                        <button className='btn btn-danger my-1' onClick={ (e)=> deleteCategory(e,m._id)}>
                                          Delete
                                        </button>
                                        </div>
                                        <div className="col-md-2"> <Link  to={`/contacts/edit/${m._id}`}className='btn btn-success my-1'>
                                          Update
                                        </Link></div>
                                       
                                        </div>
                               </div>
                            
                         </div>
                     </div>
                    
                 </div>
             </div>
             
                    </section>
                ))}
                </div>
                
            }
        </div>
        
        
    )
}
export default ContactList;
