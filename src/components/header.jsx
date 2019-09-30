import React from 'react';
import PropTypes from "prop-types";
import Logo from "../common/logo"
import Popup from '../components/Popup'
import CartTable from './CartTable';



const Header = (props) => {

    const { itemsData, totalQuantity, togglePopup, showPopupStatus, handleDelete,
        counterDecrement, counterIncrement, getGrandTotal } = props;

    return (
        <div className="header">
            <Logo />

            <div className="cart-btn">
                <small className="totalQuantity">{totalQuantity}</small>
                <i className="fas fa-shopping-cart" onClick={togglePopup} >
                    <i className="fas fa-caret-down caret"></i>
                </i>
            </div>

            {showPopupStatus ?
                <Popup closePopup={togglePopup}>
                    {itemsData ? (<CartTable
                        itemsData={itemsData}
                        grandTotal={getGrandTotal}
                        counterDecrement={counterDecrement}
                        counterIncrement={counterIncrement}
                        handleDelete={handleDelete}
                    />) : <p style={{ marginLeft: "30px" }}> Add Some Items </p>}
                </Popup>
                : null
            }
            <div className="clear"></div>
        </div>
    );
}

Header.propTypes = {
    itemsData: PropTypes.array.isRequired,
    totalQuantity: PropTypes.number.isRequired,
    togglePopup: PropTypes.func.isRequired,
    showPopupStatus: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired,
    counterDecrement: PropTypes.func.isRequired,
    counterIncrement: PropTypes.func.isRequired,
    getGrandTotal: PropTypes.number.isRequired

}

export default Header;






