import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ModalRegister = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:9000/api/v1/user/register", input);

            alert (res.data.message);
            
            // navigate("/login");

        } catch (error) {
            alert(error.response.data.message)
        }
    }

  return (
    <>
        <div className="modal fade" id="ModalRegister">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={
                                    (e)=> setInput({...input, [e.target.name]: e.target.value})
                                }
                                className="form-control mb-2"
                                placeholder='Enter full name'
                                />
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

export default ModalRegister