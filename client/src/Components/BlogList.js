import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BlogList = () => {

    const navigate = useNavigate();

    const [blogs, setBlogs ] = useState([]);

    useEffect(()=>{
        const fatchAllBlogs = async () =>{
            const res = await axios.get("http://localhost:9000/api/v1/get/allblogs", {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setBlogs(res.data);
        }
        fatchAllBlogs();
    }, []);


  return (
    <div className='container mt-4'>
        <div className="row">

            {  
                blogs && blogs.length > 0 
                ? 
                
                blogs.map((item) => {
                    return (
                        <div key={item._id} className="col-lg-4">
                            <div className="single-blog-card border border-gray mb-4 p-3 rounded">
                                <img className='w-100 mb-2 rounded' src={`http://localhost:9000/${item.thumnail}`} alt="" />
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <button onClick={() => navigate(`/blogs/${item._id}`)} className="read-more btn border border-success">
                                    Read more
                                </button>
                            </div>
                        </div>
                    );

                })
                :
                <>Loding</>

            }
            
        </div>
    </div>
  )
}

export default BlogList