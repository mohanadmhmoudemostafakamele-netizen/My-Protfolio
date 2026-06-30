import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: 'Email',
    info: 'mostafaoofaoocha@gmail.com',
    link: 'mailto:mostafaoofaoocha@gmail.com',
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: 'Messenger',
    info: 'mouhanad mhmoude',
    link: 'https://m.me/yourusername', // استبدله برابط الماسنجر الخاص بك
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: 'WhatsApp',
    info: '01068151437',
    link: 'https://api.whatsapp.com/send?phone=201068151437',
  }
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oha52if', 'template_0350vxq', form.current, 'wlfTOo9iyFNpBkZV8')

      e.target.reset()
      
      
      
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
          e.target.reset(); // لتفريغ الحقول بعد الإرسال
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">Send a message</a>
            </article>
          ))}
        </div>
        
        {/* نموذج التواصل المربوط بـ ref و onSubmit */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea name="message" rows="10" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;