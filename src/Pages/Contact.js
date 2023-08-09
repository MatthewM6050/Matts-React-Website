import React from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';


function Contact() {

  //Functions
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdghnzv', 'template_ga0yk8s', e.target, 'XRKcIXJNTtYTIul8M')
    .then((result) => {
      console.log('Message Sent Successfully!');
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  };


  return (
    <div className='contact'>
      <div className='leftColumn'/>
      <div className='rightColumn'>
        <h1>Contact Me</h1>

        <form onSubmit={sendEmail}>
          <label htmlFor='Name'>Full Name</label>
          <input name='user_name' placeholder='Enter full name please...' type='text' />

          <label>Email</label>
          <input name='user_email' placeholder='Enter Email please...' type='email'/>

          <label>Message</label>
          <textarea rows='6' name='message' placeholder='Enter message...' required></textarea>
          
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
