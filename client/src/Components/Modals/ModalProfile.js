import React, { useState, useEffect } from 'react'

const ModalProfile = () => {
  const LogOut = async () => {
    await localStorage.clear();                
    AfterLogOut();
  }

  const AfterLogOut = async () => {
    document.getElementById("siteLogo").click();
  }

  const [name, setName] = useState( localStorage.getItem('name') )


  useEffect(() => {

    const interval = setInterval(() => {
      const savedName = localStorage.getItem('name');
      if (savedName) {
        setName(savedName);
      }
    }, 1000);

    return () => clearInterval(interval);

  }, [name]);



  return (
    <>
        <div className="modal fade" id="ModalProfile">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Profile</h5>
                        <button type="button" id='closeModalProfile' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <ul className='list-unstyled'>
                        <li className='mb-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <span className='ml-2 d-inline'> {name}</span>
                        </li>
                        <li>
                          <span className='btn bg-danger text-white' onClick={LogOut}>Logout</span>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ModalProfile