// Variables
const form = document.querySelector('form');

const ipt_name = document.querySelector('#first_name');
const ipt_lastname = document.querySelector('#last_name');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const inputs = document.querySelectorAll('input');

// Eventos
form.addEventListener('submit', validarFormulario);
eventListener();


function eventListener() {

    ipt_name.addEventListener('blur', validarFormulario);
    ipt_lastname.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    pass.addEventListener('blur', validarFormulario);
}

// Validar Formulario
function validarFormulario(e) {

    e.preventDefault();

    
    const err = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value === '') {

        switch (true) {

            case e.target.classList.contains('first_name'):
                mostrarError('First Name cannot be empty', e.target);
                break;

            case e.target.classList.contains('last_name'):
                mostrarError('Last Name cannot be empty', e.target);
                break;

            case e.target.type === 'email' && (!err.test(e.target.value)):

                const email_ejm = document.getElementsByName('email')[0];
                email_ejm.placeholder = 'email@exmaple/com';
                mostrarError('Looks like this is not an email', e.target);
                break;

            case e.target.classList.contains('pass'):
                mostrarError('Password cannot be empty', e.target);
                break;
        }
    } else {

        if (e.target.classList.contains('icon_error') && e.target.nextElementSibling.classList.contains('error')) {

            e.target.classList.remove('icon_error');
            e.target.nextElementSibling.remove();
        }
        ipt_name.value === '' ? mostrarError('First Name cannot be empty', ipt_name) : '';
        ipt_lastname.value === '' ? mostrarError('Last Name cannot be empty', ipt_lastname) : '';
        email.value === '' || (!err.test(email.value)) ? mostrarError('Looks like this is not an email', email) : '';
        pass.value === '' ? mostrarError('Password cannot be empty', pass) : '';
    }
}


// Mostrar alerta
function mostrarError(mensaje, nodo_insertar) {

    // Variables
    const mensajeError = document.createElement('p');
    const error = document.querySelectorAll('.error');
    mensajeError.classList.add('error');


    if (error.length < 4) {
        mensajeError.innerHTML = `${mensaje}`;
        if (!nodo_insertar.nextElementSibling.classList.contains('error')) {
            nodo_insertar.after(mensajeError);
            nodo_insertar.classList.add('icon_error');
        }
    }
}