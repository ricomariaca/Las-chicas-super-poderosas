import { ImgGallery } from "../../ui/components/ImgGallery"
import { Navbar } from "../../ui/components/Navbar"
import { StarRating } from "../../ui/components/StarRating"
import { BsChatRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
export const ProductView = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div
        className="bg-teal-600 h-5">
      </div>

      <div className="grid grid-cols-4">
        <div
          className="col-span-2">
          <ImgGallery />
        </div>

        <div className="my-14 ">
          <h1 className="font-bold">
            Title
          </h1>
          <span>montana barata</span>

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
            <span>una montana barata para construir terrenos</span>
          </div>

        </div>
        <button>asdsdd</button>
      </div>

      <div
        className="bg-teal-600 h-0.5">
      </div>

      <div className="grid grid-cols-2">

        <div className="my-3 ml-10 ">
          <CiUser size={30} />
          <StarRating />
          <input type="text" placeholder="Ingrese su comentario" />
        </div>
        <div className="my-3">
          <button>asdsd</button>
        </div>
      </div>
      <div
        className="bg-teal-600 h-0.5">
      </div>



    </>

  )
}

