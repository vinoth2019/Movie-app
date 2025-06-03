import { useState } from 'react';
import Footer from '../Footer.jsx';
const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const emailHanlder = (e) => {
    setEmail(e.target.value)
  }
  const numlHanlder = (e) => {
    setNumber(e.target.value)
  }
  const textlHanlder = (e) => {
    setText(e.target.value)
  }
  const submitHanlder = (e) => {
    console.log('submitted')
    const formEle = document.querySelector('form');
    e.preventDefault();
    const formData = new FormData(formEle);
    fetch('https://script.google.com/macros/s/AKfycbxgzFKZyuru9Agxjnq1x9ifasOP8uvn448PvLGiDUKEXPX6xXJigYXtDcgI1YQlBGuWMw/exec', {
      method: "POST",
      body: formData
    })

  }
  return (
    <div className="contact-container">
        <div className='contact-section'>
            <div className='contact-top'>
              <div style={{backgroundColor: "#000000ba", width: "100%", height: "inherit"}}>
                  <h1>Contact Us</h1>
              </div>
              
            </div>

            <div className='contact-bottom'>
              <div className='contact-bottom-left'>
                <form onSubmit={e => submitHanlder(e)}>
                  <div className='contact-email'>
                      <h2>Email</h2>
                      <input type='email' name='Email' placeholder='Enter your Email here' onChange={emailHanlder} value={email} />
                  </div>
                  <div className='contact-phone'>
                      <h2>Phone Number</h2>
                      <input type='number' name="Number" placeholder='Enter your Mobile Number' onChange={numlHanlder} value={number} />
                  </div>
                  <div className='contact-text'>
                      <h2>Enter your Comment</h2>
                      <textarea placeholder='Enter your comment here.' name='Message' onChange={textlHanlder} value={text} />
                  </div>
                 <button>Send</button>
                 </form>
              </div>
              <div className='contact-bottom-right'>
                  <div>
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint corrupti temporibus, eos nemo tenetur voluptatum optio perferendis reiciendis praesentium ducimus dolores minima nobis cupiditate, illo quae sunt cum nostrum atque.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint corrupti temporibus, eos nemo tenetur voluptatum optio perferendis reiciendis praesentium ducimus dolores minima nobis cupiditate, illo quae sunt cum nostrum atque.</p>
                  </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs