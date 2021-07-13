import React, { useState, useRef } from 'react';
import searchPokemon from '../../helpers/searchPokemon';
import './index.css'

const SearchInput = ({ onSearch, isFetchingPokemon }) => {
    const [value, setValue] = useState('');
    const debounce = useRef(null);
    const defaultTimeout = 800;

    const placeholder = "Digite um pokemon..."

    
    const onSearchPokemon = async (name) => {
        if(!name){
            isFetchingPokemon(false);
            onSearch(null);
            return;
        }

        const pokemon = await searchPokemon(name.toLowerCase());

        isFetchingPokemon(false);
        onSearch(pokemon);
    }


    const onChangeValue = (e) => {

        if(debounce.current) {
            clearTimeout(debounce.current);
        }

        setValue(e.target.value);

        debounce.current = setTimeout(() => {
            isFetchingPokemon(true)
            onSearchPokemon(e.target.value);
        }, defaultTimeout);
    }

    return(
        <input type="text" value={value} placeholder={placeholder} onChange={onChangeValue} />
    )
}

export default SearchInput;