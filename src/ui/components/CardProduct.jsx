import images from "../../assets/images";
import icons from "../../assets/icons";
import image from "../../../src/assets/img/produc.jpg";
import { StarRating } from "./StarRating";

export const CardProduct = (props) => {
  return (
    <div>
      <img src={`../../../src/assets/img/${props.url}`} />
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
