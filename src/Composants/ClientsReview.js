import React,{useState}from 'react'
import Carousel from 'react-bootstrap/Carousel';
import clt1 from '../Images/client1.jpg'
const ClientsReview = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
     
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='review h-75' interval={20000}>
      <div className="reviews">
            <h3>Client Reviews</h3>
            <img src={clt1} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br/>
                aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                <h2>Mark Jevenue</h2>
                <p>CEO of Addle</p>
        </div>
      </Carousel.Item>
      <Carousel.Item className='review h-75' interval={20000}>
      <div className="reviews ">
            <h3>Client Reviews</h3>
            <img src={clt1} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br/>
                aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                <h2>Mark Jevenue</h2>
                <p>CEO of Addle</p>
        </div>
      </Carousel.Item>
      <Carousel.Item className='review h-75' interval={20000}>
      <div className="reviews">
            <h3>Client Reviews</h3>
            <img src={clt1} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br/>
                aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                <h2>Mark Jevenue</h2>
                <p>CEO of Addle</p>
        </div>
      </Carousel.Item>
    </Carousel>
   
  )
}

export default ClientsReview
