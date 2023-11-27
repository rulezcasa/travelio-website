// Main content component describing the app's functionality

import './maincontent.css'
import phone from './phone.png'
import airplane from './airplane.png'
import phone2 from './phone2.png'
import scuba from './scuba.jpeg'
import scene1 from './scene1.jpg'
import scene2 from './scene2.jpeg'
import people1 from './people1.jpeg'
import people2 from './people2.png'
import people3 from './people3.jpeg'
import phone3 from './phone3.png'

function Section2(){
    return(
        <div className="main-div">
            <span className="endless">Endless</span>
            <span className="possibilities">possibilites</span>
            <div className='phone'>
                <img src={phone}></img>
            </div>
            <div className='airplane'>
                <img src={airplane}></img>
            </div>
            <div className='quote-2'>
            <span className='dare'>Dare to <span className='blue-text'>live the life</span></span>
            <span className='you'>you've always wanted</span>
            </div>
            <div className='quote-3'>
            <p className='explore'>Explore through thousands</p>
            <p className='of'>of user generated travel</p>
            <p className='plans'>plans and find your next trip</p>
            </div>
            <div className='quote-4'>
            <span className='connecting'>Connecting <span className='blue-text'>travelers</span> across the globe</span>
            </div>
            <div className='quote-5'>
            <p className='join'>Join groups and meet up with travelers</p>
            <p className='from'>from around the world, wherever you are!</p>
            </div>
            

            <div className='phone2'>
                <img src={phone2}></img>
            </div>
            <div className='scuba'>
            <img src={scuba}></img>
            </div>
            <div className='scene1'>
            <img src={scene1}></img>
            </div>
            <div className='scene2'>
            <img src={scene2}></img>
            </div>


            <div className='people1'>
                <img src={people1}></img>
            </div>
            <div className='people2'>
            <img src={people2}></img>
            </div>
            <div className='people3'>
            <img src={people3}></img>
            </div>
            <div className='phone3'>
            <img src={phone3}></img>
            </div>
            
        </div>
    )
}
export default Section2;