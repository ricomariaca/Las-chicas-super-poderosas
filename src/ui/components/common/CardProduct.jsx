import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../../../assets/icons";
import { AuthContext } from "../../../auth";
import { ProductView } from "../../../hunt/pages/products/ProductView";

export const CardProduct = (props) => {
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path, {
      state: {
        key: props.userId,
        name: props.name,
        url: props.url,
        description: props.description,
        userName: props.UserName,
        UrlPhoto: props.Url,
      },
    });
  };

  return (
    <>
      {!logged ? (
        <button
          onClick={() => handleNavigate("/productView")}
          className="nav-link "
        >
          <img src={props.url} alt="Product" />
          <span>{props.name}</span>
        </button>
      ) : (
        <button
          onClick={() => handleNavigate("/productViewlog")}
          className="nav-link"
        >
          <img src={props.url} alt="Product" />
          <span>{props.name}</span>
        </button>
      )}
      <div>
        <div>
          <p>{props.description}</p>
          <div>
            <div className="flex items-center">
              <img
                src={props.Url}
                alt="User Icon"
                className="w-8 h-8 cursor-pointer rounded-full"
              />
              <label className="ml-2">{props.UserName}</label>
            </div>

            <img src={icons.totalR} alt="Total Ratings Icon" />
            <p>4.0</p>
            <img src={icons.stars} alt="Stars Icon" />
          </div>
        </div>
      </div>
    </>
  );
};
