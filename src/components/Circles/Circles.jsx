import React from 'react';
import './Circles.css';

const Circles = (props) => (
    <div className="Circles">
        {props.circles.map((circle, idx) => 
            <div
                key={idx}
                className={props.current === idx ? "selected" : ""}
                
            ></div>
        )}
    </div>
);

export default Circles;