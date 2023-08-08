import React from 'react'
import UserForm from './UserForm'

export default function ContactSection() {
  return (
    <div className='container'>
      <h2 className='text-center mt-5 mb-1'>Contact Us</h2>
      <h5 className="text center" mb-5 text-secondary> Connect with us anytime!</h5>
        <div className="row">
            <div className="col-md-6">
            <img className='img-fluid'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4UDDhF8SI9F_1YwBVd7XPS5T_K1Gk7BaJQ&usqp=CAU" alt="" srcset="" />

        </div>
       <div className="col-md-6"><UserForm/></div>
      </div>
      </div>
  )
}
