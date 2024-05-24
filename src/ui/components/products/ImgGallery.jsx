import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const ImgGallery = (props) => {
  const images = [
    {
      original: props.UrlImagen,
      thumbnail: props.UrlImagen,
    },
  ];

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        renderItem={(item) => (
          <div className="w-[500px] h-[300px]">
            <img
              src={item.original}
              alt=""
              className="object-contain w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        renderThumbInner={(item) => (
          <div className="w-[100px] h-[75px]">
            <img
              src={item.thumbnail}
              alt=""
              className="object-contain w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      />
    </div>
  );
};
