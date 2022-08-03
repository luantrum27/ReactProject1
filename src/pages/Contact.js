import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/Contact/ContactForm'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactInfo from '../components/Contact/ContactInfo'

function Contact() {
  return (
    <div className='contact-container'>
      <ContactHeader />
      <div className='contact-content'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact