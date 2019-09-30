import React from 'react';




const NavBar = (props) => {
    return (
        <React.Fragment>
            <div className="navbar">
                <a href="#" className="item-type">ALL CATEGORIES</a>
                <a href="#" className="item-type">CLOTHES</a>
                <a href="#" className="item-type">CHAIRS</a>
                <a href="#" className="item-type">LAMPES</a>
                <a href="#" className="item-type">OTHER</a>

            </div>
            {props.sum}
        </React.Fragment>
    );
}

export default NavBar;
