import icons from "../../assets/icons";
import { NavLink } from "react-router-dom";

export const CardProduct = (props) => {
  return (
    <div>
      <NavLink to="/productView" className="nav-link text-teal-600 mr-96">
        <img src={`../../../src/assets/img/${props.url}`} />
      </NavLink>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div>
          <img src={icons.user} />
          <img src={icons.totalR} />
          <p>4.0</p>
          <img src={icons.stars} />

          {/*<StarRating />*/}
        </div>
      </div>
    </div>
  );
};
