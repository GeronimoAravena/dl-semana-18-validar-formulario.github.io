/* eslint-disable react/prop-types */
import './Alert.css'

const Alert = ({state, message}) => {
    let classStyle = "alert-message";
    classStyle += state ? " validateAlert" : " noValidateAlert";

    return (
        <>
            <p className={classStyle}>{message}</p>
        </>
    );
};

export default Alert;