import React from 'react';
import PropTypes from "prop-types";


const CartSubComponent = (props) => {

    const { itemsData, counterIncrement, counterDecrement, handleDelete } = props;
    const totalPrice = itemsData.value * itemsData.price;

    return (
        <tr>
            <td>{itemsData.title}</td>
            <td>
                <button
                    className="increment-btn"
                    onClick={() => counterIncrement(itemsData.id)}
                >
                    +
                </button>
                {itemsData.value}
                <button
                    className="decrement-btn"
                    onClick={() => counterDecrement(itemsData.id)}
                    disabled={itemsData.value === 0 ? "disabled" : ""}
                >
                    -
                </button>
            </td>
            <td>{itemsData.value}*{itemsData.price}</td>
            <td>{totalPrice}</td>
            <td><button
                className="delete-btn"
                onClick={() => handleDelete(itemsData.id)}
            >Delete
            </button></td>
        </tr>
    );
}

CartSubComponent.propTypes = {
    itemsData: PropTypes.object.isRequired,
    counterIncrement: PropTypes.func.isRequired,
    counterDecrement: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired

}

export default CartSubComponent;