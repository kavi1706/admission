import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const EditContact  = () => {
        const navigate = useNavigate()
         let { contactId} = useParams()
        // const user = JSON.parse(contactId)
        const [user,setUsers]=useState(null)
        const [dis,setDis]=useState(false)
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8080/view/${contactId}`)
            console.log(data)
            setUsers(data)
        }
        useEffect(()=>{
            getData()
        },[])
        useEffect(()=>{
                if(user!=null){
                    setName(user.name)
                    setPhotourl(user.photourl)
                    setMobile(user.mobile)
                    setEmail(user.email)
                    setDept(user.dept)
                    setDob(user.dob)
                    setHsc(user.hsc)
                    setSslc(user.sslc)
                    
                    setDis(true)
                }
        },[user])
    console.log(user)
    const [name,setName]=useState('')
    const [photourl,setPhotourl]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [dept,setDept]=useState('')
    const [dob,setDob]=useState('')
    const [hsc,setHsc]=useState('')
    const [sslc,setSslc]=useState('')


    

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post(`http://localhost:8080/edit/${user._id}`,{name,photourl,mobile,email,dept,hsc,sslc})
        navigate('/contacts/list')
}
   
    return (
        
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Update student details
                        </p>
                        
                    </div>
                </div>
                {dis && 
                <div className="row align-items-center">
                    <div className="col-md-4">
                            <form>
                               <div className="mb-2">
                               <label className="form-label text-success fw-bold h5">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">Photo</label> 
                                   <input type="text" className='form-control' value={photourl} onChange={e => setPhotourl(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">Mobile</label> 
                                   <input type="number" className='form-control' value={mobile} onChange={e => setMobile(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">Email</label>
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                {/* <label className="form-label">Department</label> 
                                  <select className="form-select">
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Computer science and Engineering</option>
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Information Technology</option>
                                    <option value={dept} onChange={e => setDept(e.target.value)}>Electronics and communication Engineering</option>
                                  </select> */}
                                </div>
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">DOB</label> 
                                   <input type="date" className='form-control' value={dob} onChange={e => setDob(e.target.value)} />
                                </div>
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">HSC mark</label> 
                                   <input type="text" className='form-control' value={hsc} onChange={e => setHsc(e.target.value)} />
                                </div> 
                                <div className="mb-2">
                                <label className="form-label text-success fw-bold h5">SSLC mark</label> 
                                   <input type="text" className='form-control' value={sslc} onChange={e => setSslc(e.target.value)} />
                                </div>   
                              
                                  
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-primary' value='Update' onClick={handleSubmit}/>
                                   {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link> */}
                               
                                </div>   
                            </form>
                    </div>
                    
                </div>
}
            </div>
        </section>
        </>
    )
};
export default EditContact ;