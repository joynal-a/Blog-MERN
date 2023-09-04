import axios from 'axios';
import React, { useState } from 'react'

const ModalAddBLog = () => {

  const [cat, setCat] = useState({
    title: "",
  });

  const handleCat = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:9000/api/v1/add/category", cat, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert(res.data.message);
    }catch(error){
      alert(error.response.data.message)
    }
  }

  return (
    <>
        <div className="modal fade" id="ModalAddBLog1">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{maxWidth:900}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Blog</h5>
                        <button type="button" id='closeModalProfile' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4">
                        <div className="row">
                          <div className="col-md-8">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, a reprehenderit delectus ipsa similique quis magni voluptas officiis autem inventore quam. Porro consectetur ipsam ipsum rem eos voluptatem ullam a!
                          </div>
                          <div className="col-md-4">
                            <form onSubmit={handleCat}>
                              <div className="mb-3">
                                <label htmlFor="CatTitle">Title</label>
                                <input 
                                  type="text" 
                                  name="title"
                                  value={cat.title}
                                  onChange={(e)=> setCat({...cat, [e.target.name]: e.target.value })}
                                  id="CatTitle"
                                  className="form-control"
                                  placeholder='Enter Category title'
                                />
                              </div>
                              <div className="mb-3">
                                <button type='submit'>Add Categories</button>                       
                                
                              </div>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ModalAddBLog