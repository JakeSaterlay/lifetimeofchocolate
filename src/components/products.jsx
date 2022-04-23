import "../styles/layout.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import pic3 from "../images/pic3.jpeg";
import chloe from "../images/chloe.jpg";

function Products() {
	return (
		<div className="section products-section">
			<div className="section-img">
				<img src={pic1} className="about-me-img" alt="chloe" />
			</div>
			<div className="section-text">
				<p className="section-title">Our Tasty Treats</p>
				<p className="text">
					I started my career as a chef in Norwich, whilst at college I
					developed a passion for baking and patisserie. I then jumped at the
					chance to move to New York City and work as a baker for 8 months. I
					then returned to the UK and took the opportunity to work in some of
					the most inspired kitchens such as Le Manior Aux Quat Saisons and
					William Curley. I decided my passion is in chocolate so I moved to
					London, to work for Paul A Young Fine Chocolates, for 15 months before
					deciding to come back to my home in Norwich and set up a small
					business making wonderful handmade chocolates and treats!
				</p>
			</div>
		</div>
	);
}

export default Products;

// <Carousel
// 	className="product-carousel"
// 	showThumbs={false}
// 	showStatus={false}
// 	autoPlay={true}
// 	infiniteLoop={true}
// >
// 	<div>
// 		<img src={pic1} />
// 	</div>
// 	<div>
// 		<img src={pic2} />
// 	</div>
// 	<div>
// 		<img src={pic3} />
// 	</div>
// </Carousel>;
