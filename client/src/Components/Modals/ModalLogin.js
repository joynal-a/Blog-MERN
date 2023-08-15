import React from 'react'

const ModalLogin = () => {
  return (
    <>
        <div className="modal fade" id="ModalLogin">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalLogin