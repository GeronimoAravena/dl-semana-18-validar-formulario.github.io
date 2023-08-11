/* eslint-disable react/prop-types */
import './Input.css'

const FloatingInput = ({type, id, name, label, value="", onChange=null, validate=null}) => {
    return (
        <>
            <div className="box" >
                <input 
                    type={type} 
                    placeholder=" "
                    autoComplete='off'
                    id={id}
                    name={name}
                    {...onChange!=null ? onChange={onChange} : null}
                    value={value}
                    className={validate == null ? null : validate ? "validateInput": "noValidateInput"}
                    />
                <span className={validate == null ? null : validate ? "validateLabel": value.length == 0 ? null : "noValidateLabel"}>{label}</span>
            </div>
        </>
    );
};

export default FloatingInput;