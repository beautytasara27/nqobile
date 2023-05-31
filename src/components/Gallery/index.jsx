import { forwardRef, useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";

function ImageModal({ isOpen, image, handleClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="max-w-3xl max-h-[500px] overflow-y-auto relative">
            <button
              className="absolute top-0 right-0 m-4 text-black"
              onClick={handleClose}
            >
              <i class="fa-solid fa-2x fa-circle-xmark"></i>
            </button>
            <img
              className="mx-auto"
              src={`${process.env.PUBLIC_URL}${image.url}`}
              alt={image.id}
            />
          </div>
        </div>
      )}
    </>
  );
}

const Gallery = forwardRef((props, ref) => {
  const { Images } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (props.experienceIn) {
    document.getElementById("experience").classList.add("landing");
  }

  const handleClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="w-full max-w-6xl font-rubik-regular lg:ml-0">
        <div>
          <h1
            ref={ref}
            className=" scroll-mt-40 font-anton-regular tracking-wider text-2xl mb-20 text-white"
          >
            <span className="pr-4 text-yello">03.</span>Gallery
          </h1>
        </div>
        <div
          id="experience"
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 "
          style={{ height: "500px" }}
        >
          {Images.map((image) => (
            <div
              key={image.id}
              className="relative h-full bg-themeDarker hover:scale-110 transform transition duration-300 ease-in-out hover:bg-yello"
            >
              <button onClick={() => handleClick(image)}>
                <img
                  className="absolute inset-0 object-cover w-full h-full p-1 translate-x-2 translate-y-2"
                  src={`${process.env.PUBLIC_URL}${image.url}`}
                  alt={image.id}
                />
              </button>
            </div>
          ))}
        </div>
        <ImageModal
          isOpen={isOpen}
          image={selectedImage}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
});

export default Gallery;
