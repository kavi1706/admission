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
                    setProductname(user.productname)
                    setDescription(user.description)
                    
                    setDis(true)
                }
        },[user])
    console.log(user)
    const [name,setName]=useState('')
    const [photourl,setPhotourl]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [productname,setProductname]=useState('')
    const [description,setDescription]=useState('')

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post(`http://localhost:8080/edit/${user._id}`,{name,photourl,mobile,email,productname,description})
        navigate('/contacts/list')
}
   
    return (
        
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Edit Contact
                        </p>
                        <p className='fst-italic'>ihiiiiiiiiiii</p>
                    </div>
                </div>
                {dis && 
                <div className="row align-items-center">
                    <div className="col-md-4">
                            <form>
                               <div className="mb-2">
                               <label className="form-label">Name</label> 
                                   <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">PhotoUrl</label> 
                                   <input type="text" className='form-control' value={photourl} onChange={e => setPhotourl(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Mobile</label> 
                                   <input type="number" className='form-control' value={mobile} onChange={e => setMobile(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Email</label>
                                   <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Productname</label> 
                                   <input type="text" className='form-control' value={productname} onChange={e => setProductname(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Description</label> 
                                   <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                                </div>  
                              
                                  
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-primary' value='Update' onClick={handleSubmit}/>
                                   <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link>
                               
                                </div>   
                            </form>
                    </div>
                    <div className="col-md-6">
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg " className='contact-img'/>
                    </div>
                </div>
}
            </div>
        </section>
        </>
    )
};
export default EditContact ;