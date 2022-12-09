import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";

/**
 * Show a single clickable image. Links to Image Detail page.
 *
 * Prop: single image object like:
 *       		{
      "creation_date": "Fri, 09 Dec 2022 01:07:38 GMT",
      "description": null,
      "ext": "jpeg",
      "file_name": "da674ab56cf4408ab132af549095d25c.jpeg",
      "id": "da674ab56cf4408ab132af549095d25c",
      "metadata": {},
      "title": null,
      "url": "https://pixlyapp.s3.amazonaws.com/da674ab56cf4408ab132af549095d25c.jpeg"
    }
 *
 * Images --> ImagesList --> ImageCard
 */
function ImageCard({ url, id, title }) {

  const src = `"${url}"`;

  return (
    <Link className="ImageCard" to={`/images/${id}`}>
      <img className="ImageCard-thumbnail img-thumbnail" src={src} alt={title} />
    </Link>
  );
}

export default ImageCard;