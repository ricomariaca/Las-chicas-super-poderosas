import { Navbar } from '../../ui/components/Navbar'
import { Drawer } from '../../ui/components/Drawer'

export const AddProduct = () => {
  return (
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-teal-600">
        Add Product
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
            Product name*
          </label>
          <div>
            <Drawer/>
          </div>
        </div>

        <div>
          <label htmlFor="producto" className="block text-sm font-medium leading-6 text-gray-900">
            Product URL*
          </label>
          <div>
            <Drawer/>
          </div>
        </div>

        <div>
      <label htmlFor="tage" className="block text-sm font-medium leading-6 text-gray-900">
        Tage*
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Empty field"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Categories
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2"
          >
            <option>TECHNOLOGY</option>
            <option>FASHION</option>
            <option>GAMES</option>
            <option>SPORT</option>
            <option>PETS</option>
            <option>HOME</option>
          </select>
        </div>
      </div>
    </div>

    <div>
          <label htmlFor="descripcion" className="block text-sm font-medium leading-1 text-gray-900">
          Product description*
          </label>
          <div className="mt-2">
            <Drawer/>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
