import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import imagePostoHome from '../../images/imagePostoHome.png';
import post1 from '../../images/post1.png';
import post2 from '../../images/post2.png';
import post3 from '../../images/post3.png';

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='principalPost'>
                    <Link to="/post?codPost=reciclagem">
                        <img src={imagePostoHome} alt='Post principal' />
                        <div className='textoPost'>
                            <h1>Reciclagem e Educação Ambiental: Como a Conscientização Pode Transformar Nosso Futuro</h1>
                        </div>
                    </Link>
                </div>
                <div className='cardContainer'>
                    <div className='card'>
                        <Link to="/post?codPost=energia">
                            <img src={post1} alt='Post 1' />
                            <h2>Os Impactos Ambientais das Grandes Usinas Hidrelétricas: Uma Análise Crítica</h2>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/post?codPost=pobreza1">
                            <img src={post2} alt='Post 2' />
                            <h2>O papel da educação de qualidade na redução da pobreza</h2>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/post?codPost=pobreza2">
                            <img src={post3} alt='Post 3' />
                            <h2>Diferenças e semelhanças entre a pobreza nas áreas urbanas e rurais</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
