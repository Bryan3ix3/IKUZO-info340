import React, { useState, useRef } from "react";

const PhotoUpload = () => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;
      let parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      setImage(files[0]);
    }
  };

  const handleClick = () => {
    inputFile.current.click();
  };

  return (
    <React.Fragment>
      <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
        aria-label="select"
      />
      <button className="btn btn-info uploadButton" onClick={handleClick} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"><span className="fa fa-camera"></span>
      </button>
    </React.Fragment>
  );
};

export default PhotoUpload;
