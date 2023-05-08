import React, { useState } from 'react';
import './Contact.css'

const Contact= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!email.includes('@')) {
      setEmailError(true);
    }
    if (name && email.includes('@')) {
      console.log('Form submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
    }
  };
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {nameError && <span className="error-message">Name is required</span>}
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <span className="error-message">Email is invalid</span>}
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </section>
  )
}

export default Contact
