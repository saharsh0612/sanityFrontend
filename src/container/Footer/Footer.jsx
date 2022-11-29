import React, {useEffect, useState} from 'react'
import './Footer.scss'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'

const Footer = () => {

  // const initialValues = {name:"", email:"", message:""}

  const [formData, setFormData] = useState({name:'', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [formErrors, setFormErrors] = useState({});

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type:'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.name = "Name is Required!"
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is Required!"
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!"
  //   }
  //   if (!values.message) {
  //     errors.messgae = "Message is Required!"
  //   }
  // }


  return (
    <>
    <h2 className='head-text'>Take a coffee & chat with me.</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email"></img>
        <a href='mailto:saharshsinha2@gmail.com' className='p-text'>saharshsinha2@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile"></img>
        <a href='tel: +91 8210041507' className='p-text'>+91 8210041507</a>
      </div>
    </div>

    {!isFormSubmitted ? 

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}></input>
          {/* <p>{formErrors.name}</p> */}
        </div>
        <div className="app__flex">
          <input className='p-text' type='email' placeholder='Your email' name='email' value={email} onChange={handleChangeInput}></input>
          {/* <p>{formErrors.email}</p> */}
        </div>
        <div>
          <textarea className='p-text' name="message" value={message} placeholder='Your Message' onChange={handleChangeInput}></textarea>
          {/* <p>{formErrors.message}</p> */}
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>

      :

      <div>
        <h3 className='head-text'>Thank You For Getting in Touch</h3>
      </div>

    }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)