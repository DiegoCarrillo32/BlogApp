import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { notify } from '../helpers/toast';

export const ContactMe = () => {
  const form = useRef<any>()

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_z6ydm4n', 'template_n90arh2', form.current, 'P7yYUUgm6YOuTvb9D')
      .then(() => {
        notify('Email sent succesfully', true)
      }, () => {
        notify('Error while sending email, try again later', false)
      });
  };

  return (
    <form ref={form}  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"  />
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
