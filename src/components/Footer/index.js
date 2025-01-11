import React from 'react';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const atualDate = new Date()

const Footer = () => {

    return (
        <footer className="container">
            <p>© {atualDate.getFullYear()} | Thais Schlei</p>
        </footer>
    );
}

export default Footer;