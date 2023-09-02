import React from 'react'

const AppLogin = () => {
	const auth = localStorage.getItem('token');
  	return auth && auth != null ? true : false;
}

export default AppLogin