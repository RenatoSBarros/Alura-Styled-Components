import React from 'react';
import { IconeTema } from '../Components/Ui';
import  alimentaçâo  from '../assets/images/alimentacao.svg';
import  outros  from '../assets/images/outros.svg';
import  saude  from '../assets/images/saude.svg';
import  transporte  from '../assets/images/transporte.svg';
import  utilidades  from '../assets/images/utilidades.svg';


// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentaçâo} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Saúde: <IconeTema src={saude} alt="Saúde" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        default: <IconeTema src={outros} alt="Outros" />
    };
    
    // eslint-disable-next-line no-const-assign
    return  Images[type]  || Images.default
     
};