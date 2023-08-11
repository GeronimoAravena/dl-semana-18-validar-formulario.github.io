/* eslint-disable react/prop-types */

import './Button.css'

const Button = ({type, content}) => {
    return (
        <>
            <button type={type} className="default-button">{content}</button>
        </>
    );
};

export default Button;