import React from 'react';
import './index.css'

const ResultItem = ({ pokemon }) => {
    const { name, sprites, types, height, weight } = pokemon || {};

    const renderImage = () => {
        if(!sprites || !sprites.front_default){
            return null;
        }

        return <img src={sprites.front_default} alt={name} />
    }


    const renderTypes = () => {
        if(!types || !types.length) {
            return null;
        }

        return(
            <div className="types-container">
                {types.map(({ type }) => <h4 key={type.name} className={`type-text ${type.name}`}>{type.name}</h4>)}
            </div>
        )
    }

    const getHeight = () => {

        const parsedHeight = height * 0.1;

        if(parsedHeight < 1) {
            return `${Math.round(parsedHeight * 100)}cm`
        }

        return `${Math.round(parsedHeight * 100) / 100}m`;
    }

    const getWeight = () => {

        const parsedWeight = weight * 0.1;

        if(parsedWeight < 1) {
            return `${parsedWeight * 1000}g`
        }

        return `${parsedWeight}kg`
    }

    return(
        <div className="results">
            <div className="pokemon-infos-container">
                <h2>{name}</h2>
                {renderTypes()}
                <div className="pokemon-measures">
                    <h5>{getHeight()}</h5>
                    <h5>{getWeight()}</h5>
                </div>
            </div>
            {renderImage()}
        </div>
    )
}

export default ResultItem;