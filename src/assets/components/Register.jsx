/* eslint-disable react/prop-types */
import Alert from './Alert';
import Form from './Form'
import Icon from './Icon'
import Header from './Header';
import './Register.css'

const Register = ({validate, setValidate}) => {

    // Dependiendo del formulario actualiza el estado de validación
    const getStatus = (status) => {
        setValidate(status);
    }

    // Genera array de iconos para Header
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
                    {/* Importación de header / se envia title, subtitle y array de social (Icon) */}
                    <Header title="Crea una cuenta" subtitle="O usa tu e-mail para registrarte" social={social}/>
                </div>
                <div className="form-container">
                    {/* Importación de Form (retorna con onSubmit estado de validación) */}
                    <Form onSubmit={getStatus}/>
                </div>
                <div className='alert-container'>
                    {/* Según validación se muestra la alerta */}
                    {validate == null ? <div style={{padding:"1.6rem 0"}}></div> : <Alert state={validate} message={validate ? "Registro Exitoso!" : "Debe validar los campos"}/>}
                </div>
            </div>
        </>
    );
};

export default Register;