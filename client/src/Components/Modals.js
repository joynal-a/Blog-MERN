import React from 'react'
import ModalLogin from './Modals/ModalLogin'
import ModalRegister from './Modals/ModalRegister'
import ModalProfile from './Modals/ModalProfile'
import ModalAddBLog from './Modals/ModalAddBLog'

const Modals = () => {
  return (
    <>
      <ModalLogin />
      <ModalRegister />
      <ModalProfile />
      <ModalAddBLog />
    </>
  )
}

export default Modals