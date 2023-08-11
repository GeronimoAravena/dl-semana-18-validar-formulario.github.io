/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import FloatingInput from './Input'
import Button from './Button';
import './Form.css'


const Form = ({onSubmit}) => {

    // Usuario Inicial
    const userDefault = {
        "name": "",
        "email": "",
        "password": "",
        "passwordConfirm": "" 
    };

    // Estado Usuario
    const [user, setUser] = useState(userDefault);

    const [validate, setValidate] = useState(
        [
            {key: "name", validate: null},
            {key: "email", validate: null},
            {key: "password", validate: null},
            {key: "passwordConfirm", validate: null},
        ]
    );

    // Contenido Input
    const inputContent = [
        {
            type: "text",
            id: "txtName",
            name: "name",
            label: "Name"
        },
        {
            type: "text",
            id: "txtEmail",
            name: "email",
            label: "E-mail"
        },
        {
            type: "password",
            id: "txtPassword",
            name: "password",
            label: "Password"
        },
        {
            type: "password",
            id: "txtPasswordConfirm",
            name: "passwordConfirm",
            label: "Confirm Password"
        }

    ];

    // Guarda contenido onchange (input)
    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setUser({...user, name: e.target.value})
                break;
            case "email":
                setUser({...user, email: e.target.value})
                break;
            case "password":
                setUser({...user, password: e.target.value})
                break;
            case "passwordConfirm":
                setUser({...user, passwordConfirm: e.target.value})
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let listError = [];

        setValidate(validate.map((element) => {
            if (element.key == "name") {
                element.validate = user.name.length >= 3 ? true : false;
                !element.validate ? listError.push("<p>- El nombre requiere al menos 3 caracteres</p>") : null;
            }

            if (element.key == "email") {
                element.validate = user.email.length <=0 ? false : (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))
                !element.validate ? listError.push("<p>- Debe ingresar un formato correcto de e-mail</p>") : null;
            }

            if (element.key == "password") {
                element.validate = user.password.length < 10 ? false : true;
                !element.validate ? listError.push("<p>- La contraseña requiere al menos 10 caracteres</p>") : null;
            }

            if (element.key == "passwordConfirm") {
                element.validate = user.passwordConfirm.length < 10 ? false : user.password != user.passwordConfirm ? false : true;
                user.passwordConfirm.length < 10 ? listError.push("<p>- La confirmación de contraseña requiere al menos 10 caracteres</p>") 
                : user.password != user.passwordConfirm ? listError.push("<p>- Las contraseñas no coinciden</p>") : null;
                
            }

            return element
        }))

        //Obtiene el estado de validación
        let validation = validate.filter((element) => element.validate == false).length == 0 ? true : false

        if (validation) {
            setUser(userDefault);
            setValidate(validate.map((element) => {
                element.validate = null
                return element
            }));

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                html: `<div id='pop-up-validation'>${listError.join("")}</div>`,
                showCancelButton: true,
                cancelButtonColor: '#d33',
                cancelButtonText: "Cerrar",
                showConfirmButton: false
            })
        }


        // Retorna al registro el estado del proceso
        onSubmit(validation);
    };

    // Obtiene el estado de validación
    const findStatusValidate = (inputKey) => validate[validate.findIndex((element) => element.key == inputKey)].validate;

    return (
        <>
            <form onSubmit={handleSubmit} className='form-container' method='post'>
                {   
                    // Elementos input dinamicos
                    inputContent.map(element => {
                        return <FloatingInput key={element.id} {...element} value={user[element.name]} onChange={handleChange} validate={findStatusValidate(element.name)}/>
                    })
                }
                <Button type="submit" content="Register"/>
            </form>
        </>
    );
};

export default Form;