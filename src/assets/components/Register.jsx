/* eslint-disable react/prop-types */
import Alert from './Alert';
import Form from './Form'
import Icon from './Icon'
import './Register.css'

const Register = ({validate, setValidate}) => {

    const getStatus = (status) => {
        setValidate(status);
    }

    const social = [
        <Icon icon="instagram" key="instagram"></Icon>,
        <Icon icon="facebook" key="facebook"></Icon>,
        <Icon icon="linkedin" key="linkedin"></Icon>,
        <Icon icon="github" key="github"></Icon>
    ]

    return (
        <>
            <div className="root-container">
                <div className="register-container">
                    <h2>Crea una cuenta</h2>
                    <div className="social-container">
                        {social.map(element => { return element })}
                    </div>
                    <p>O usa tu e-mail para registrarte</p>
                </div>
                <div className="form-container">
                    <Form onSubmit={getStatus}/>
                </div>
                <div className='alert-container'>
                    {validate == null ? <div style={{padding:"1.6rem 0"}}></div> : <Alert state={validate} message={validate ? "Registro Exitoso!" : "Debe validar los campos"}/>}
                </div>
            </div>
        </>
    );
};

export default Register;