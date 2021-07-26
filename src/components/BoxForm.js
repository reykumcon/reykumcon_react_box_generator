import React, { useState } from 'react';

const BoxForm = (props) => {
    const { boxArray, setBoxArray } = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray([
            ...boxArray,
            {
                color: color,
                size: size + "px"
            }
        ]);
        setColor("");
        setSize(0);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } />
            </div>
            <div>
                <label>Color</label>
                <input type="text" value={size} onChange={ (e) => setSize(e.target.value) } />
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default BoxForm;