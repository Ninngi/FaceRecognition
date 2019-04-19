import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bouding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;

// leftCol: clarifaiFace.left_col * width,
//   topRow: clarifaiFace.top_row * height,
//     rightCol: width - clarifaiFace.right_col * width,
//       bottomRow: height - clarifaiFace.bottom_row * height
