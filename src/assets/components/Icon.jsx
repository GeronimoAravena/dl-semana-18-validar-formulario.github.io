/* eslint-disable react/prop-types */

import './Icon.css'

const Icon = ({icon}) => {
    icon = `fa-brands fa-${icon} fa-2xl`
    return (
        <>
            <i className={icon} aria-hidden="true"></i>
        </>
    );
};

export default Icon;