import React from 'react'
import { FaPhone, FaMapMarker, FaEnvelope, FaTwitter, FaLinkedin, FaGoogle, FaFacebook } from 'react-icons/fa'
import Button from './Button'

const SendUsAMessage = () => {
  return (
    <div id='contact' className='fr'>
      <div id="inner_card" className='fr'>
        <div id='message' className="card">
          <p>CONTACT US</p>
          <h1>Send us a message</h1>
          <p id='someText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus excepturi, incidunt qui ab blanditiis a vel architecto praesentium accusamus.</p>
          <div id="cards">
            <div className="card fr">
              <div className="image"><FaPhone /></div>
              <div className="text">+000 000 0000</div>
            </div>
            <div className="card fr">
              <div className="image"><FaMapMarker /></div>
              <div className="text">1281, Houma</div>
            </div>
            <div className="card fr">
              <div className="image"><FaEnvelope /></div>
              <div className="text">terrobone@help.com</div>
            </div>
            <div id="follow">
              <h2>Follow Us on</h2>
              <div id="cards_follow" className='fr'>
                <div className="cards"><FaFacebook /></div>
                <div className="cards"><FaGoogle /></div>
                <div className="cards"><FaLinkedin /></div>
                <div className="cards"><FaTwitter /></div>
              </div>
            </div>
          </div>
        </div>
        <div id='form' className="card">
          <div id='one' className="section fr">
              <div className="s fc">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className="s fc">
              <label htmlFor="">Email</label>
                <input type="text" name="" id="" />
              </div>
          </div>

          <div id='two' className="section fr">
              <div className="s fc">
                <label htmlFor="">Phone</label>
                <input type="text" name="" id="" />
              </div>
              <div className="s fc">
              <label htmlFor="">Subject</label>
                <input type="text" name="" id="" />
              </div>
          </div>

          <div id='three' className="section fr">
              <div className="s fc">
                <label htmlFor="">Message</label>
                <textarea type="text" rows={10} name="" id="" />
              </div>
          
          </div>

          <Button text={'Send Message'}/>

        </div>
      </div>

    </div>
  )
}

export default SendUsAMessage