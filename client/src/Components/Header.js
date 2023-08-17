import React  from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  return (
    <>
      <header className='bg-dark'>
        <div className="container">
          <div className="row px-3">
            <div className="col-md-4 navbar-dark d-flex justify-content-between align-items-center">
              <a className="navbar-brand" href="www.dfd.com">Logo</a>
              <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

            </div>
            <div className="col-md-8">
              <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div className="d-flex justify-content-end   w-100">
                      <ul className="navbar-nav">
                        <li className="nav-item text-white">
                          <span className='nav-link' onClick={navigate('/')}>
                            Home
                          </span>
                        </li>

                        { token && token !== null ? (
                            <>
                              <li className="nav-item text-white">
                                <span className='nav-link' data-bs-toggle="modal" data-bs-target="#ModalProfile">
                                  Add blog
                                </span>
                              </li>
                              <li className="nav-item text-white">
                                <span className='nav-link' data-bs-toggle="modal" data-bs-target="#ModalProfile">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                  </svg>
                                </span>
                              </li>
                            </>
                          ):(
                            <>

                              <li className="nav-item">
                                <span className="nav-link" data-bs-toggle="modal" data-bs-target="#ModalRegister">Register</span>
                              </li>
                              <li className="nav-item">
                                <span id='LoginButton' className="nav-link" data-bs-toggle="modal" data-bs-target="#ModalLogin">Login</span>
                              </li>
                            </>
                          ) 
                        }







                      </ul>
                    </div>
                  </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header