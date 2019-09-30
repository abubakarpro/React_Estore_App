import React from 'react'
import PropTypes from "prop-types";
import '../style.css'

const ItemCard = (props) => {
    const { onClick, counter, item } = props;

    return (
        <div className="item-card">
            <img className="item-img" src={item.img} style={{ width: "50%" }} />
            <p className="item-price"><b>${item.price}</b></p>
            <p className="item-quantity">{counter ? counter.value : <span>&nbsp;</span>}</p>
            <button onClick={() => onClick(item.id)}>Add to Cart</button>
        </div>
    );
}

ItemCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    counter: PropTypes.object,
    item: PropTypes.object.isRequired

}

export default ItemCard;
