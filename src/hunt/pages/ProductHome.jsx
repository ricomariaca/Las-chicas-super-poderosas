import { Navbar } from "../../ui/components/Navbar"
import images from '../../assets/images'
import icons from '../../assets/icons'
import { BannerHome } from "../../ui/components/BannerHome"
import { LatestPosts } from "../../ui/components/LatestPosts"
import { InformationSpaceHome } from "../../ui/components/InformationSpaceHome"
import { BestRatedHome } from "../../ui/components/BestRatedHome"
import { Footer } from "../../ui/components/Footer"


export const ProductHome = () => {
  return (
    <>
    <Navbar/>
    <BannerHome/>
    <LatestPosts/>
    <InformationSpaceHome/>
    <BestRatedHome/>
    <Footer/>
   

    </>
    
    
  )
}
