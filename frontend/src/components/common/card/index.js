import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ image, brand, name, id }) => {
  return (
    <div className="cardcontainer">
      <Link to={`/product/${id}`} className="textwrap">
        <img
          src={image}
          alt="Italian Trulli"
          style={{ width: "100%", height: 240 }}
        />
        <h2>{brand}</h2>
        <strong>{name}</strong>
      </Link>
    </div>
  );
};

// Card.propTypes = {
//   image: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
// };

export default Card;
