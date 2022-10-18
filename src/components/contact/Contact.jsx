import React, {useRef } from 'react'
import './contact.css'
import {MdOutlineEmail }  from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
// import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.prevendtDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gautam.tamang0000@gmail.com</h5>
            <a href="mailto:gautam.tamang0000@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Gautam Tamang</h5>
            <a href="https://m.me/gautam.tamang2/">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5> +977 9806635421</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779806635421">Send a message</a>
          </article>
        </div>
       {/* END OF CONTACT OPTIONS  */}

       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="email" name='email' placeholder='Your email' required  />
        <textarea name="message" placeholder='Your message' rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact