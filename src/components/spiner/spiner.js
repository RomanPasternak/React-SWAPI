import React from 'react';

import './spiner.css';
import spin from './Double Ring-3.3s-200px.gif';

const Spiner = () => {
    return(
        <div className="spiner">
            <img src={spin} />
        </div>
    );
};

export default Spiner;