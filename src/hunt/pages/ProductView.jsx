import { ImgGallery } from "../../ui/components/ImgGallery"
import { Navbar } from "../../ui/components/Navbar"
import { StarRating } from "../../ui/components/StarRating"

export const ProductView = () => {
  return (
    <>
      <div>
        <Navbar />
        <h1>que riko la monda</h1>
      </div>
      <div>
        <ImgGallery />
      </div>

      <div>
        <StarRating />
      </div>


    </>

  )
}

