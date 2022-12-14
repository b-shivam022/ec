import SectionData from "./SectionData";
import "./Card.css";
import Scard from "./Scard";

const Card = () => {
  return (
    <div className="card">
      {SectionData.map((item) => {
        return <Scard {...item} />;
      })}
    </div>
  );
};

export default Card;
