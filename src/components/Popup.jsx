import React from 'react'
import PropTypes from "prop-types";


const Popup = (props) => {

    const { closePopup } = props;

    return (
        <div className="popup">
            <div className="popup_inner">
                <button className="Close-popup-btn" onClick={closePopup}>X</button>
                {props.children}



            </div>
        </div >
    );
}

Popup.propTypes = {
    closePopup: PropTypes.func.isRequired,
}


export default Popup;

