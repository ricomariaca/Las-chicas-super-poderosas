import { ImgGallery } from "../../../ui/components/products/ImgGallery";
import { Navbar } from "../../../ui/components/common/Navbar";
import { StarRating } from "../../../ui/components/common/StarRating";
import { BsChatRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { ReviewContext } from "../../context";
import { useForm } from "../../../hooks";
import icons from "../../../assets/icons";

const newEmptyReview = {

  Review: '',
  star: '',
}

export const ProductView = () => {


  const { saveReview, user } = useContext(ReviewContext);
  console.log(user)
  const { Review, star, onInputChange } = useForm(newEmptyReview)

  const onCreateReview = async (event) => {
    event.preventDefault();

    const newReview = {

      Review: Review,
      userId: user.uid,
      star: star,


    };
    await saveReview(newReview)




  }
  const handleRatingChange = (rating) => {
    // Actualiza el estado de la calificación (star) cada vez que cambia
    onInputChange({ target: { name: "star", value: rating } });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-teal-600 h-5"></div>

      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <ImgGallery />
        </div>

        <div className="my-14 ">
          <h1 className="font-bold">Title</h1>
          <span>Mkbook</span>

          <div className="my-8">
            <div>
              <BsChatRight />
            </div>
            <div className="ms-5 ">
              <StarRating />
            </div>
          </div>
          <div className="my8">
            <p className="font-bold">User</p>
            <span>juan patricio de montana</span>
          </div>
          <div className="my-8">
            <p className="font-bold">description</p>
            <span>Una mkbook barata</span>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto my-auto p-4">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Visitar
          </button>
        </div>
      </div>

      <div className="bg-teal-600 h-0.5"></div>

      <div className="grid grid-cols-2">
        <div className="my-3 ml-10 ">
          <img
            src={icons.user}
            alt="User Icon"
            className="w-8 h-8 cursor-pointer"
            
          />
          {user?.displayName}
          
          <StarRating onRatingChange={handleRatingChange} />
          <input id="Review" name="Review" onChange={onInputChange} value={Review} type="text" placeholder="Enter your comment" />
        </div>
        <div className="my-3">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={onCreateReview} >
            Send
          </button>
        </div>
      </div>
      <div className="bg-teal-600 h-0.5"></div>

      <div className="my-3 ml-10 ">
        <div style={{ marginLeft: "50px" }} className="text-xl font-bold ">
          product reviews
        </div>
        <div>
          <div style={{ marginLeft: "100px" }} className="ml-12">
            <CiUser size={30} />
          </div>
          <div style={{ marginLeft: "57px" }}>
            <StarRating />
            <input className="ml-4" type="text" placeholder="comment" />
          </div>
        </div>
      </div>
    </>
  );
};
