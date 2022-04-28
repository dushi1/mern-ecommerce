import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ image, brand, name, id }) => {
  return (
    <Link to={`/product/${id}`} className="cardcontainer textwrap">
      <img
        className="card-image"
        src={image}
        alt="Italian Trulli"
        // style={{ width: "100%", height: 240 }}
      />
      <div className="text-wrapper textwrap">
        <h2 className="textwrap">{brand}</h2>
        <strong className="textwrap">{name}</strong>
      </div>
    </Link>
  );
};

// Card.propTypes = {
//   image: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
// };

export default Card;
