import { Drawer } from "../../../ui/components/products/Drawer";
import images from "../../../assets/images";
import { Navbar } from "../../../ui/components/common/Navbar";

export const AddProduct = () => {
  return (
    <>
      <Navbar />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight mb-6 text-teal-700">
        Add Product
      </h2>

      <div className="text-center mb-6">
        <img
          src={images.img4}
          className="w-30 h-40 mx-auto rounded-lg shadow-md"
          alt="Profile Picture"
        />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="flex justify-between ">
            <div className="w-1/2 pl-0 mr-6 flex flex-col items-center">
              <span className="font-bold">Name*</span>
              <Drawer />
            </div>

            <div className="w-1/2 pl-0 flex flex-col items-center">
              <span className="font-bold ">User Id*</span>
              <Drawer />
            </div>
          </div>

          <div className="block text-sm font-semibold leading-6 text-gray-900">
            <span className="font-bold ">Product URL*</span>
            <Drawer />
          </div>

          <div>
            <span className="font-bold">Tage*</span>
            <div className="relative mt-2 rounded-md shadow-sm">
              <Drawer />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2">
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

          <div className="block text-sm font-semibold leading-6 text-gray-900">
            <span className="font-bold "> Product description*</span>
            <textarea className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 "
            >
              add product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
