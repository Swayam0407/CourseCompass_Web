import NavBar from "./NavBar";
import CardsTeam from "./CardsTeam";

function AboutUs() {
  const arrow = process.env.PUBLIC_URL + "/arrow.png";

  const img1 = process.env.PUBLIC_URL + "/img1.jpg";
  const img2 = process.env.PUBLIC_URL + "/img2.jpeg";
  const img3 = process.env.PUBLIC_URL + "/img3.jpeg";
  const img4 = process.env.PUBLIC_URL + "/img4.jpeg";



  const teamMembers = [
    { img: img1, name: "Swayam Aggarwal" },
    { img: img2, name: "Prarthana Samal" },
    { img: img3, name: "Kriti Singh" },
    { img: img4, name: "Armanveer Kaur" },
  ];

  return (
    <div className="Page3">
      <NavBar /> 
      <div className="cont-team">
        <div className="yellow-surr">
          <div className="Meethead">Meet our team</div>
          <div className="bunch-container">
            <img src={arrow} alt="arrow" id="placement" />
            <div className="bunch">We're a bunch of 3rd years!</div>
          </div>
        </div>
        <div className="cards-container">
          {teamMembers.map((member, index) => (
            <CardsTeam key={index} img={member.img} name={member.name} />
          ))}
        </div>
        <div className="description-text">
          Are you a college student overwhelmed by endless course options to
          boost your skills? We were too! That's why we created a solution to
          save you time and hassle. Using AI, we rank courses to give you a
          clear, transparent picture of the best options. Say goodbye to
          guesswork and hello to smart learning!
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
