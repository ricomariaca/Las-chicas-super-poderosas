import { ImgGallery } from "../../../ui/components/products/ImgGallery";
import { Navbar } from "../../../ui/components/common/Navbar";
import { StarRating } from "../../../ui/components/common/StarRating";
import { BsChatRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../context";
import { useForm } from "../../../hooks";
import icons from "../../../assets/icons";
import { loadReview } from "../../helpers/loadReview";
import { AuthContext } from "../../../auth";
import { Link } from "react-router-dom";

const newEmptyReview = {
  Review: "",
  star: "",
};

export const ProductView = () => {
  const { logged } = useContext(AuthContext);
  const { saveReview, user } = useContext(ReviewContext);
  console.log(user);
  const { Review, star, onInputChange } = useForm(newEmptyReview);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const productsData = await loadReview();
        setReview(productsData);
      } catch (error) {
        console.error("Error fetching Review", error);
      }
    };
    fetchReview();
  }, []);

  const onCreateReview = async (event) => {
    event.preventDefault();

    const newReview = {
      Review: Review,
      userId: user.uid,
      star: star,
    };
    await saveReview(newReview);
  };
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

      <div className="bg-gray-600 h-0.5 opacity-15"></div>

      <div className="grid grid-cols-2">
        <div className="my-3 ml-10 ">
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              className="w-8 h-8 cursor-pointer rounded-full mr-2"
            />
            <span className="mr-4">{user?.displayName}</span>
          </div>

          <StarRating onRatingChange={handleRatingChange} />
          <input
            id="Review"
            name="Review"
            onChange={onInputChange}
            value={Review}
            type="text"
            placeholder="Enter your comment"
          />
        </div>
        <div className="my-3">
          {!logged && (
            <>
              <label htmlFor="">Si tanto quieres...</label> <br />
              <Link to="/login" className="text-md text-blue-500">
                login
              </Link>
            </>
          )}

          {logged && (
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              onClick={onCreateReview}
            >
              Send
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-600 h-0.5 opacity-15"></div>

      <div className="my-3 ml-10 space-y-6">
        <div className="text-xl font-bold">Product Reviews</div>
        <div>
          <ul>
            {review.map((review) => (
              <li
                key={review.id}
                className="border rounded p-4 flex flex-col items-start space-y-2 my-4"
              >
                <div>
                  <img src={icons.user} className="w-7 h-7" />
                  <span className="font-bold">Calificación:</span> {review.star}
                </div>
                <div>
                  <span className="font-bold">Comentario:</span> {review.Review}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
