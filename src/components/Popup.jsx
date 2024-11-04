import React, { useState } from "react";
import { FaTimes, FaArrowRight } from "react-icons/fa";

const Popup = ({ word, phoneme, onClose }) => {
  const [showImage, setShowImage] = useState(false);

  const toggleView = () => setShowImage(!showImage);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg w-3/4 sm:w-1/2 relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="text-2xl mb-4">
          <b>Word:</b> {" "}
          {word.charAt(0).toUpperCase() + word.slice(1)}
        </h2>
        {showImage ? (
          <>
            <img
              src={`assets/img/${word}.jpg`}
              alt={word}
              className="rounded-lg"
              style={{ maxWidth: "200px", marginRight: "10px" }}
            />
            <p className="m-2">
              This is a <span className="text-blue-500">{word}</span> image.
            </p>
          </>
        ) : (
          <p
            className="text-2xl font-bold"
            dangerouslySetInnerHTML={{
              __html: word.replace(phoneme, `<u class="text-blue-500">${phoneme}</u>`),
            }}
          />
        )}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={toggleView}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
