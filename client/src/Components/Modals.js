import React from 'react'
import ModalLogin from './Modals/ModalLogin'
import ModalRegister from './Modals/ModalRegister'
import ModalProfile from './Modals/ModalProfile'

const Modals = () => {
  return (
    <>
      <ModalLogin />
      <ModalRegister />
      <ModalProfile />
    </>
  )
}

export default Modals