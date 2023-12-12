import '../contactus/contact.css';
import { useForm, ValidationError } from '@formspree/react';
import boat from './boat.svg'
import airplane from './airplane.png'
import { useNavigate } from 'react-router-dom';


function Contact() {
  
  const navigate = useNavigate();

  const BackHome = () => {
    navigate('/');
  };

  const componentStyle = {
    background: 'radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)',
    
};    
  const [state, handleSubmit] = useForm("xvojebob");
    if (state.succeeded) {
      alert('Thanks for getting in touch!')
      navigate('/')
    }
    return (
    <div className='outer'>
    <div className='main' style={componentStyle} >
      <h1>Contact Us</h1>
      <h3>Leave a message below and we'll get in <span className='blue-text'>touch</span> with you shortly! </h3>
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
        <br></br>
        <br></br>
        <input onClick={BackHome}  type="back" value="Back to homepage" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </div>
     </div>
  );
}

export default Contact;
