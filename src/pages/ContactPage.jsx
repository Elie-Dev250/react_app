import React, { useState } from 'react';

function ContactPage() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
  };

  return (
    <div className='cont'>
      <h1>Contact Us for more information please</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Write your message..."
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
