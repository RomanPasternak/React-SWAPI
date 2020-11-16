import React from 'react';

import './spiner.css';
import spin from './spinImg.gif';

const Spiner = () => {
    return (
        <div className="spiner">
            <img src={spin} alt='spiner' />
        </div>
    );
};

export default Spiner;