import { useState } from 'react';
import './UrlShorter.css';
import axios from 'axios';



export const UrlShorter = () => {

    const [inputUrl , setInputUrl] = useState("");
    const [shortenUrl , setShortenUrl] = useState("");
    const [copy , setCopy] = useState("");

//       // Async await fn
   const fetchUrl = async() => {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', inputUrl);

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '068ae3fba8mshf67291063d3fba0p1c4e39jsna3474b46fcf3',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log("data",response.data);
    setShortenUrl(response.data)

} catch (error) {
	console.error(error);
}

   };


   const handleCopy = () => {
    navigator.clipboard.writeText(shortenUrl.result_url);
    setCopy("Copied");
   }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputUrl)
        fetchUrl();
        setCopy("")
        

        
    }

    const handleChange = (e) => {
        setInputUrl(e.target.value);
    }

    

    return(
        <div className="container">
    <div className="nav-container">
      <div className="nav-content">
        <ul>
          <li className="nav-heading"><img src="images/logo.svg" alt="" /></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul>
          <li><button className="login-btn">Login</button></li>
          <li><button className="sign-up-btn">Sign Up</button></li>
        </ul>
      </div>
      
    </div>

    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-left">
          <p className="intro-heading">More than just shorter links</p>
          <p className="intro-para">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <a className="intro-btn" href="/"><button>Get Started</button></a>
        </div>

        <div className="intro-right">
          <img src="/images/illustration-working.svg" alt="" />
        </div>
      </div>
    </div>

    <div className="link-shorter-container">
      <div className="link-shorter-content">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={inputUrl} placeholder="Shorten a link here..."/>
          <button type="submit">Shorten It!</button>
        </form>
      </div>
      <div className="link-shorter-btm">
        
      </div>

    </div>

    <div className={shortenUrl ? "shorten-link-container active" : "shorten-link-container"} >
      <div className="shorten-link-content">
        <div className="shorten-link-left">
          <p className="given-link">{inputUrl}</p>
        </div>
        <div className="shorten-link-right">
          <p className="shorten-link"> <a href={shortenUrl.result_url}> {shortenUrl.result_url} </a> </p>
          <button className={copy? "Copied" : "Copy"} onClick={handleCopy}>{copy ? "Copied!" : "Copy"}</button>
        </div>
        
      </div>
    </div>

    
      <div className="advanced-container">
        <div className="advanced-content">
          <div className="advanced-top">
            <p className="advanced-heading">Advanced Statistics</p>
            <p className="advanced-para">Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>
          <div className="advanced-btm">
              <div className="advanced-cards">
                <div className="advanced-card">
                  <div className="card-img">
                    <img src="images/icon-brand-recognition.svg" alt="" />
                  </div>
                  <p className="card-heading">Brand Recognition</p>
                  <p className="card-para">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <div className="advanced-card">
                  <div className="card-img">
                    <img src="images/icon-detailed-records.svg" alt="" />
                  </div>
                  <p className="card-heading">Detailed Records</p>
                  <p className="card-para">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>

                <div className="advanced-card">
                  <div className="card-img">
                    <img src="images/icon-fully-customizable.svg" alt="" />
                  </div>
                  <p className="card-heading">Fully Customizable</p>
                  <p className="card-para">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
              </div>
              <hr />
          </div>
        </div>
      </div>


      <div className="boost-container">
        <div className="boost-content">
          <p className="boost-heading">Boost your links today</p>
          <button className="boost-btn">Get Started</button>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-icon">
            <img src="images/logo-white.svg" alt="" />
          </div>
          <div className="footer-links">
            <ul>
              <li>Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
            <ul>
              <li>Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-social">
            <img src="images/icon-facebook.svg" alt="" />
            <img src="images/icon-twitter.svg" alt="" />
            <img src="images/icon-pinterest.svg" alt="" />
            <img src="images/icon-instagram.svg" alt="" />
          </div>
        </div>
      </div>
  </div>
    )
}