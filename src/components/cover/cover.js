// The cover image displaying the Logo, one liner and navbar
// Figma : Section 1

import logo from "./logo.svg";
import wave from "./wave.svg";
import googleplay from "./google-play.svg";
import appstore from "./app-store.svg";
import "./cover.css";

function Section1() {
  return (
    <div className="cover-image">
      <div className="overlay"></div>
      <div className="logo">
        <img src={logo} alt="Logo"></img>
        <p className="logo-text">travelio</p>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Trips</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <span className="one-liner">
        <p>
          Connecting <span className="blue-text">travellers</span> across the
          globe
        </p>
      </span>
      <div className="wave-1">
        <img src={wave} alt="Wave"></img>
      </div>
      <div className="wave-2">
        <img src={wave} alt="Wave"></img>
      </div>
      <div className='install'>
    <img className='appstore' src={appstore} alt='appstore'></img>
    <img className='playstore' src={googleplay} alt='googleplay'></img>
    </div>
    </div>
  );
}

export default Section1;