import '../contactus/contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const componentStyle = {
    background: 'radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)',
};    
  const [state, handleSubmit] = useForm("xvojebob");
    if (state.succeeded) {
        return <p>Thanks for getting in touch!</p>;
    }
    return (
    <div className='main' style={componentStyle} >
      <h1>Contact Us</h1>
      <h3>Leave a message below and we'll get in touch with you shortly! </h3>
      <form onSubmit={handleSubmit}>

        <div className="txt_field">
          <input type="text" name="name" id="name" required />
          <span></span>
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="txt_field">
          <input type="text" name="email" id="email" required />
          <span></span>
          <label htmlFor="email">Email</label>
        </div>

        <div className="txt_field">
          <input type="text" name="message" id="message" required />
          <span></span>
          <label htmlFor="message">Message</label>
        </div>

        <div className="pass">
          <input className="pass" type="reset" value="Reset" />
        </div>

        <input type="submit" value="Submit" />
        <input type="hidden" name="_template" value="table" />

      </form>
    </div>
  );
}

export default Contact;
