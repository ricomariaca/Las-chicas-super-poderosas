import { Navbar } from "../../ui/components/Navbar"
import images from '../../assets/images'
import icons from '../../assets/icons'


export const ProductHome = () => {
  return (
    <>
    <Navbar/>
    <h1>Home</h1>
    <img src={images.img1}/>
    <img src={images.img2}/>
    <img src={icons.icon1}/>

    </>
    
    
  )
}
