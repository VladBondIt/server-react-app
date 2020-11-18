import React from 'react';

import './errorMessage.css';
import img from './error.jpg';


const ErrorMessage = () => {
    return (
        <>
            {/* Путь если картинка лежит в папке Public/img */}
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img> */}
            <img src={img} alt='error'></img>
            <span>Somthing goes wrong</span>
        </>
    )
}

export default ErrorMessage;