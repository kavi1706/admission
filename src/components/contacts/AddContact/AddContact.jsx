import React,{ useState } from 'react';
import {Link, Navigate} from "react-router-dom";

import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddContact  = () => {
    const [name,setName]=useState('')
    const [photourl,setPhotourl]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [dob,setDob]=useState('')
    const [dept,setDept]=useState('')
    const [sslc,setSslc]=useState('')
    const [hsc,setHsc]=useState('')
    const [m1,setM1]=useState('')
    const [m2,setM2]=useState('')
    const [c1,setC1]=useState('')
    const [c2,setC2]=useState('')

    // const [productname,setProductname]=useState('')
    // const [description,setDescription]=useState('')
   
    const navigate=useNavigate()
    
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post('http://localhost:8080/signup',{name,photourl,hsc,sslc,dob,email,mobile})
        navigate('/contacts/list')
}
    return (
        <>
        <section className='add-contact p-3'>
            <div className="container">

                <div className="row">
                    <div className='col-md-4'>

                    </div>
                     <div className="col-md-4">
                        <p className="h4 text-primary fw-bold" style={{fontFamily:'timesnew roman'}}>
                            STUDENT PROFILE
                        </p>
                        
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <form onSubmit={handleSubmit}>
                               <div className="mb-2">
                               <label className="form-label fw-bold">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                               <label className="form-label fw-bold">Mobile</label> 
                                   <input type="text" className='form-control' value={mobile} onChange={e => setMobile(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">Date of birth</label> 
                                   <input type="date" className='form-control'  value={dob} onChange={e => setDob(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">Email</label> 
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">Department</label> 
                                  <select className="form-select">
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Computer science and Engineering</option>
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Information Technology</option>
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Electronics and communication Engineering</option>
                                  </select>
                                </div>
                                

                                <div className="mb-2">
                                <label className="form-label fw-bold">Photo</label> 
                                   <input type="text" className='form-control'  value={photourl} onChange={e => setPhotourl(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label fw-bold">SSLC mark</label> 
                                   <input type="text" className='form-control'  value={sslc} onChange={e => setSslc(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">HSC mark</label> 
                                   <input type="text" className='form-control'  value={hsc} onChange={e => setHsc(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">SSLC marksheet</label> 
                                   <input type="file" className='form-control'  value={m1} onChange={e => setM1(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label">Hsc marksheet</label> 
                                   <input type="file" className='form-control' value={m2} onChange={e => setM2(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label fw-bold">Community certificate</label> 
                                   <input type="file" className='form-control' value={c1} onChange={e => setC1(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                <label className="form-label fw-bold">Income certificate</label> 
                                   <input type="file" className='form-control' value={c2} onChange={e => setC2(e.target.value)}/>
                                </div>  
                                
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-danger' value='Submit'/>
                                   {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >List</Link> */}
                               
                                </div>   
                            </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};     
export default AddContact ;