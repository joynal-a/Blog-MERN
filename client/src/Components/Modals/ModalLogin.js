import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ModalLogin = () => {

    const navigate = useNavigate();

    const [input, setInput] =  useState({

        email: "",
        password: ""
    });

    const afterLogin = (res) => {
        alert (res.data.message); 

        localStorage.setItem("token", res.data.token);           
        localStorage.setItem("name", res.data.name);            
        document.getElementById("closeLoginModal").click();
        navigate("/");  
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:9000/api/v1/user/login", input);
            afterLogin(res);  

        } catch (error) {
            alert(error.response.data.message)
        }
    }

  return (
    <>
        <div className="modal fade" id="ModalLogin">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button id='closeLoginModal' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                            <input 
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={
                                    (e)=> setInput({...input, [e.target.name]: e.target.value})
                                }
                                className="form-control mb-2"
                                placeholder='Enter email'
                                />
                                
                            <input 
                                type="PassWord"
                                name="password"
                                value={input.password}
                                onChange={
                                    (e)=> setInput({...input, [e.target.name]: e.target.value})
                                }
                                className="form-control mb-2"
                                placeholder='Enter Password'
                                />
                                
                            <input 
                                type="Submit"
                                name="password"
                                className="form-control mb-2 bg-success text-white"
                                placeholder='Enter Password'
                                />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalLogin