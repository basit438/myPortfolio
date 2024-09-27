import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  // Define the form reference
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_slw95pl', 
        'template_5gsc4ak', 
        form.current,
         'ij3hPJmmP-n1z2NkC') .then(
            () => {
              console.log('SUCCESS!');
              alert('Email Sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );

         e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">XyVrZ@example.com</span>
              <a href="mailto:XyVrZ@example.com" className="contact_button">
                Write me{" "} <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i className='bx bxl-whatsapp contact_card-icon'></i>
              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">+913000000000</span>
              <a href="mailto:XyVrZ@example.com" className="contact_button">
                Write me{" "} <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i className='bx bxl-telegram contact_card-icon'></i>
              <h3 className="contact_card-title">Telegram</h3>
              <span className="contact_card-data">xyzabc</span>
              <a href="mailto:XyVrZ@example.com" className="contact_button">
                Write me{" "} <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write me your Project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag"></label>
              <input type="text" name="name" className="contact_form-input" placeholder="Insert your name" />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag"></label>
              <input type="email" name="email" className="contact_form-input" placeholder="Insert your email" />
            </div>
            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag"></label>
              <textarea name="project" cols={30} rows={10} className="contact_form-input" placeholder="Write your project"></textarea>
            </div>
            <button type="submit" className="contact_button">
              Send Message <i className="bx bx-right-arrow-alt contact_button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
