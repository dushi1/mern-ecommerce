import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const Card = ({ image, brand, name, id }) => {
    return (
        <div style={{ display: "flex", width: "100%", flexDirection: "column", borderWidth: 1, borderColor: "black", padding: 5, borderStyle: "solid" }}>
            <Link to={`/product/${id}`} style={{ width: "100%", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} >
                <img src={image} alt="Italian Trulli" style={{ width: "100%", height: 240 }} />
                <h2>{brand}</h2>
                <strong>{name}</strong>
            </Link>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
}

export default Card
