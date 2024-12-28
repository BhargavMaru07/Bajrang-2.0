import React, { useEffect, useState } from "react";

const ImageUpload = () => {
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Generate a live URL for the uploaded file
      const url = URL.createObjectURL(file);
      setImageURL(url);
      console.log(url);
    }
  };

  useEffect(() => {
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  return (
    <div>
      <h1>Upload and Preview Image</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageURL && (
        <div>
          <h2>Image Preview:</h2>
          <img
            src={imageURL}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
