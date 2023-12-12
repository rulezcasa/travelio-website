import '../team/team.css';
import linkedin from './linkedin.png'
import harish from './harish.jpeg';
import karan from './karan.jpeg'
import anshika from './anshika.jpeg'
import varun from './varun.jpeg'
import akanksh from './akanksh.jpeg'
import srihari from './srihari.jpeg'
import manav from './manav.jpeg'
import eshaan from './eshaan.jpg'
import kunal from './kunal.jpeg'
import email from './email.png'
import { Link } from 'react-router-dom';

function Team(){  
  const componentStyle = {
      background: 'radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)',
  }; 
  return(
        <div className="responsive-container-block outer-container" style={componentStyle}>
  <div className="responsive-container-block inner-container">
    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
    <p className="text-blk heading-text">
     Networking for the traveller community
      </p>
      <br></br>
      <p className="text-blk sub-heading-text">
        <h3>Our app focuses on the unique value proposition using a AI based recommendation system to connect travellers to explore the world,  create unforgettable memories, and build meaningful relationships with others who share their passion for touring. </h3>
      </p>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-blk heading-text">
        Meet our dream team
      </p>
      <p className="text-blk sub-heading-text">
        Curating the best of resources to enhance and give you a memorable travel experience.
      </p>
      <br></br>
    </div>
    <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={karan}/>
          <p className="text-blk name">
            Jaskaran Singh Walia
          </p>
          <p className="text-blk position">
          Co-founder
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={srihari}/>
          <p className="text-blk name">
            Srihari Unnikrishnan
          </p>
          <p className="text-blk position">
          Co-founder
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={varun}/>
          <p className="text-blk name">
            Varun Vashisht
          </p>
          <p className="text-blk position">
          App dev
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={harish}/>
          <p className="text-blk name">
            Harish Thangaraj
          </p>
          <p className="text-blk position">
          Web dev
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={eshaan}/>
          <p className="text-blk name">
            Eshaan Joshi
          </p>
          <p className="text-blk position">
          App dev
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={akanksh}/>
          <p className="text-blk name">
            Akanksh Sinha
          </p>
          <p className="text-blk position">
          App dev
          <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={manav}/>
          <p className="text-blk name">
            Manav Garg
          </p>
          <p className="text-blk position">
            UI/UX
            <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={kunal}/>
          <p className="text-blk name">
            Kunal Khulbe
          </p>
          <p className="text-blk position">
            App dev
            <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src={anshika}/>
          <p className="text-blk name">
            Anshika bhandari
          </p>
          <p className="text-blk position">
            Marketing
            <br></br>
          <img src={linkedin}></img>
          <img src={email}></img>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Team;