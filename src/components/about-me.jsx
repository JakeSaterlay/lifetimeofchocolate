import "../styles/layout.css";
import chloe from "../images/chloe.jpg";

function AboutMe() {
	return (
		<div className="section">
			<div className="section-text">
				<p className="section-title">Hey, I'm Chloe!</p>
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
			<div className="section-img">
				<img src={chloe} className="about-me-img" alt="chloe" />
			</div>
		</div>
	);
}

export default AboutMe;
