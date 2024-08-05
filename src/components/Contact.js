import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <label htmlFor="contact-method">Preferred Contact Method</label>
              <select id="contact-method" name="contact-method">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you have any questions, feel free to reach out to us via the contact form or through the information below:</p>
            <ul>
              <li><strong>Phone:</strong> +91 91468 93013, +91 78874 72924</li>
              <li><strong>Email:</strong> <a href="mailto:dipanshuchhanikar@gmail.com">dipanshuchhanikar@gmail.com</a>, <a href="mailto:bhawneshshare@gmail.com">bhawneshshare@gmail.com</a></li>
            </ul>
            <div className="map-container">
              <h2>Our Location</h2>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.721224134616!2d73.79479241452083!3d18.59048578754796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1851b0cfcbf%3A0xb105b956409571cb!2s1510%20Alpine%20Joyville%20Phase%201!5e0!3m2!1sen!2sin!4v1689772907326!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
