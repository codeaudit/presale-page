import React, { PropTypes } from 'react';

import './Tokens.css';

const Tokens = ({ sold, max, course }) => (
    <div className="tokens">
        <div className="tokens__top">
            <h4 className="tokens__title">Presale SNM tokens left:</h4>
            <div className="tokens__wrapper">
                <div className="tokens__count">
                    <div className="tokens__num">{sold}</div>
                    <p className="tokens__descr">SNM sold</p>
                </div>
                <span className="tokens__divider">of</span>
                <div className="tokens__count">
                    <div className="tokens__num">{max}</div>
                    <p className="tokens__descr">SNM max</p>
                </div>
            </div>
        </div>
        <p className="tokens__course">Presale SNM tokens price: 1 ETH = {course}</p>
    </div>
);

Tokens.propTypes = {
    sold: PropTypes.number,
    max: PropTypes.number,
    course: PropTypes.number
}

export default Tokens;