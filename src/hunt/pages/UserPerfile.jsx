import { Navbar } from "../../ui/components/Navbar"

export const UserPerfile = () => {
  return (
   
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Navbar/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            User Perfile
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="Nombre"
               className="block text-sm font-medium leading-6 text-gray-900">
                User name* 
              </label>
              <h1>María José Velásquez</h1>
            </div>
            
            <div>
              <label  
              className="block text-sm font-medium leading-6 text-gray-900">
                Email address*
              </label>
              <h1>mariajose72003@gmail.com</h1>
            </div>

            <div>
              <label 
              className="block text-sm font-medium leading-6 text-gray-900">
                CreateAt*
              </label>
              <h1>07/03/2003</h1>
            </div>

            <div>
              <label  
              className="block text-sm font-medium leading-6 text-gray-900">
                UpdateAt*
              </label>
              <h1>17/04/2003</h1>
            </div>

            <div>
              <label  
              className="block text-sm font-medium leading-6 text-gray-900">
                Biography
                </label>
                <h1>Hello everyone! I'm Edna, passionate about discovering new products and sharing my opinions about them. From technology to beauty, food and travel, I love exploring everything the world has to offer and then sharing my experiences with you.</h1>
            </div> 

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                edit profile
              </button>
            </div>
          </form>

        </div>
      </div>
    
  )
}

