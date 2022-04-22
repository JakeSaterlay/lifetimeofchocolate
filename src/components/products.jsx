import '../styles/layout.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.jpeg';
import pic3 from '../images/pic3.jpeg';

function Products() {
    return (
        <div>
            <div class="section products-section">
            <div className="section-img">
                <Carousel className="product-carousel" showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={pic1} />
                </div>
                <div>
                    <img src={pic2} />
                </div>
                <div>
                    <img src={pic3} />
                </div>
            </Carousel>
                </div>
                <div className="section-text">
                    <p className="section-title">Our Tasty Treats</p>
                    <p className="text">
                       All our chocolate is hand scraped on a bit of marble that makes it extra delicious
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Products;
  