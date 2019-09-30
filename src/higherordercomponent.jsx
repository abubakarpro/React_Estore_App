import React from 'react';

const connect = (mapDispatchToProps = null, mapStateToProps = null) => {
    return function (Component) {
        const d = mapDispatchToProps();
        const m = mapStateToProps();
        return <Component {...d} {...m} />
    }
}

export default connect;