/** @format */

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useGetAll } from "../../../Hooks/useGetAll";

const ImageGalleryItem = ({ item, onInit }) => {
  const imageUrl = `${process.env.REACT_APP_FE_URL}${item?.image}`;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <LightGallery
        onInit={onInit}
        plugins={[lgThumbnail, lgZoom]}
        onError={() => console.error("Error loading gallery")}
      >
        <a href={imageUrl} className='gallery-item'>
          <div
            className='image-container'
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className='overlay'>
              <div className='image-title'>{item.image_title}</div>
            </div>
          </div>
        </a>
      </LightGallery>
    </Grid>
  );
};

export function Gallery() {
  const [images, setImages] = useState([]);

  useGetAll({
    key: `/records/images/nt/`,
    enabled: true,
    select: (data) => data.data,
    onSuccess: (data) => setImages(data),
  });

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <Grid container spacing={{ xs: 1, lg: 2 }}>
      {images.map((item, index) => (
        <ImageGalleryItem key={index} item={item} onInit={onInit} />
      ))}
    </Grid>
  );
}
