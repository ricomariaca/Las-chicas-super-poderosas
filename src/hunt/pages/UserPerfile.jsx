
import { Navbar } from "../../ui/components/Navbar"

export const UserPerfile = () => {
  return (
    <>
      <Navbar/>
        <div>
          <h2 className="text-center text-2xl font-bold leading-7 text-teal-700">
            User Perfile
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
             <span className="font-bold">User name*</span>
             <h1>María José Velásquez</h1>
            </div>
            
            <div>
             <span className="font-bold">Email address*</span>
              <h1>mariajose72003@gmail.com</h1>
            </div>

            <div>
             <span className="font-bold">CreateAt*</span>
              <h1>07/03/2003</h1>
            </div>

            <div>
             <span className="font-bold">UpdateAt*</span>
              <h1>17/04/2003</h1>
            </div>

            <div>
            <span className="font-bold">Biography*</span>
              <h1>Hello everyone! I'm Edna, passionate about discovering new products and sharing my opinions about them. From technology to beauty, food and travel, I love exploring everything the world has to offer and then sharing my experiences with you.</h1>
            </div> 

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 "
              >
                Edit profile
              </button>
            </div>
          </form>
       </div>
    </>
  )
}

