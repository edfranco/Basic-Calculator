import React from 'react';
import "./Input.css";
import {Button} from "./Button";

 export const Input = (props) => (
    <div className="Input">
        {props.input}
    </div>
);