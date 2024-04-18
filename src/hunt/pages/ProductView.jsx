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
        <div className="max-w-screen-md mx-auto my-auto p-4">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Visitar</button>
        </div>
      </div>

      <div
        className="bg-teal-600 h-0.5">
      </div>

      <div className="grid grid-cols-2">

        <div className="my-3 ml-10 ">
          <CiUser size={30} />
          <StarRating />
          <input type="text" placeholder="Enter your comment" />
        </div>
        <div className="my-3">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Send</button>
        </div>
      </div>
      <div
        className="bg-teal-600 h-0.5">
      </div>

      <div className="my-3 ml-10 " >
        <div style={{ marginLeft: '50px' }} className="text-xl font-bold "  >
          product reviews
        </div>
        <div >
          <div style={{ marginLeft: '100px' }}
            className="ml-12"><CiUser size={30} />
          </div>
          <div style={{ marginLeft: '57px' }}>
            <StarRating />
            <input className="ml-4" type="text" placeholder="comment" />
          </div>
        </div>
      </div>



    </>

  )
}

