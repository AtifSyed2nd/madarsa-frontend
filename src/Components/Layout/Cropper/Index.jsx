// src/components/ImageCropper.js
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../../utils/ImageCropper";
import { ErrorMessage, Field } from "formik";

const ImageCropper = ({ field, form, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
      form.setFieldValue(field.name, file);
    }
  };

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      form.setFieldValue(field.name, croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imageSrc && (
        <div>
          <div className="crop-container">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <button type="button" onClick={handleCrop}>
            Crop Image
          </button>
        </div>
      )}
      <ErrorMessage name={field.name} component="div" />
    </div>
  );
};

export const ImageCropperField = (props) => (
  <Field name={props.name} component={ImageCropper} />
);

export default ImageCropper;
