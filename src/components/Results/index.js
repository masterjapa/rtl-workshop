import React from 'react';
import ResultItem from './ResultItem';
import EmptyItem from './EmptyItem';
import './index.css'

const Results = ({ pokemon, isSearching, children }) => {

    const renderResults = () => {
        if (!pokemon) {
            return (
              <EmptyItem />
            )
          }
      
          return <ResultItem pokemon={pokemon} />
    }

    return(
        <div className="results-container">
            {!isSearching && renderResults()}
            {children}
        </div>
    )
}

export default Results;