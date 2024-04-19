import icons from "../../assets/icons";


export const Footer = () => {
  return (
    <div>

      <h1 className=" font-bold mb-4">Product Hunt</h1>
      <h1 className="bg-gray-200 mb-4">
        <div className="flex justify-around">
          <button className=" font-semibold">Home</button>
          <button className=" font-semibold">Sobre nosotros</button>
          <button className=" font-semibold">Producto</button>
        </div>
      </h1>

      


      <div className="flex items-center justify-center">
        <img src={icons.IconF} className="mr-4" />
        <img src={icons.IconFF} className="mr-4" />
        <img src={icons.Twit} className="mr-4" />
        <img src={icons.Tik} className="mr-4" />
        <img src={icons.YouT} className="mr-4"/>
      </div>
      <hr className="w-full border-gray-200 border-t-2 my-4" />
    </div>
  );
};
