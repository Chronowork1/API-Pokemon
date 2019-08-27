import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {
    const DetailView = ({ pokemon }) => {
        const { id, name, sprite, type} = pokemon;
    }

    return (
        <section>
            <img className="sprite-image" />
            <div className='data-wrapper'>
                <h1 className='data-name'></h1>
                <p className="data-char"></p>
            </div>
        </section>
    )
}
export default DetailView;