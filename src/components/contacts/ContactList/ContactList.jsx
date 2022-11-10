
import {Link} from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from "axios";

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
            {dis && <div>
                {users.map(m=>(
                    <section className='contact-list'>
                        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                    <div className="card-body">
                    <div key={m._id}>
                            {/* <h1>{m.name}</h1>
                            <img src={m.photourl} alt="" /> */}
                    
                   
                    </div>
                                 <div className="row align-items-center d-flex justify-content-around  ">
                                 <div className="col-md-4">
                                   <img src={m.photourl} alt="" className='contact-img'/>
                                 </div>
                                 <div className="col-md-7">
                                     <ul className='list-group'>
                                         <li className='list-group-item list-group-item-action'>
                                             Name: <span className='fw-bold'>{m.name}</span>
                                         </li>
                                         <li className='list-group-item list-group-item-action'>
                                             Mobile: <span className='fw-bold'>{m.mobile}</span>
                                         </li>
                                         <li className='list-group-item list-group-item-action'>
                                             Email: <span className='fw-bold'>{m.email}</span>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="col-md-1 d-flex flex-column align-items-center">
                                        <Link  to={`/contacts/view/${m._id}`}className='btn btn-warning my-1'>
                                           <i className='fa fa-eye'/>
                                        </Link>

                                        <Link  to={`/contacts/edit/${m._id}`}className='btn btn-primary my-1'>
                                           <i className='fa fa-pen'/>
                                        </Link>

                                        <button className='btn btn-danger my-1' onClick={ (e)=> deleteCategory(e,m._id)}>
                                           <i className='fa fa-trash'/>
                                        </button>
                                       
                                 </div> 
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
