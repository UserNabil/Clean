import Data from './Data/Data';
import React from 'react';
import './News.css';
import fleche from './fleche.png';


const News = () => {
    const clickUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='data'>
            <Data />
            <div className="btn" onClick={clickUp}>
                <img src={fleche} alt="UptoNavBar" className="icone" />
            </div>
        </div>
    )
}
export default News;