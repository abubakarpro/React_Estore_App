import React from 'react'
import PropTypes from "prop-types";
import CartSubComponent from './cartSubComponent'


const CartTable = (props) => {

    const { counterDecrement, counterIncrement, handleDelete, grandTotal, itemsData } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Item-Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {itemsData.map(d =>
                    <CartSubComponent
                        key={d.id}
                        itemsData={d}
                        counterDecrement={counterDecrement}
                        counterIncrement={counterIncrement}
                        handleDelete={handleDelete}
                    />
                )}
                <tr><td><b>GrandTotal : {grandTotal}</b></td></tr>
            </tbody>
        </table>);
}

CartTable.propTypes = {
    counterDecrement: PropTypes.func.isRequired,
    counterIncrement: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    grandTotal: PropTypes.number.isRequired,
    itemsData: PropTypes.array.isRequired

}

export default CartTable;