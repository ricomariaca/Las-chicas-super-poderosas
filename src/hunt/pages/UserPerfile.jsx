
export const UserPerfile = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
                <h1>¡Hola a todos! Soy Edna, un apasionado en descubrir nuevos productos y compartir mis opiniones sobre ellos. Desde tecnología hasta belleza, pasando por comida y viajes, me encanta explorar todo lo que el mundo tiene para ofrecer y luego compartir mis experiencias con ustedes.</h1>
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

