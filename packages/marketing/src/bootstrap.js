import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

export const mount = (el) => {
     ReactDom.render(<App/>, el);
}

if(process.env.NODE_ENV === 'development'){    
    const devRoot = document.querySelector('#_marketing_dev_root')
    if(devRoot){
        mount(devRoot);
    }
}

