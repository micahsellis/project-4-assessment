import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        {props.circles.map((circle, idx) => 
            <button
                className={props.current === idx ? "selected" : ""}
                key={circle}
                onClick={() => props.handleClick(idx)}
            >{props.current === idx ? `circle ${idx} selected` : `select circle ${idx}`}</button>
        )}
    </div>
);

export default CircleSelector;