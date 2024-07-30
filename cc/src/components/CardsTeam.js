function CardsTeam(props) {
  return (
    <div>
    <div className="nameCards">
        <img src={props.img} alt="team-mem"/>
    </div>
    <div className="nameText">{props.name}</div>
    </div>
  );
}

export default CardsTeam;
