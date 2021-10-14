import React, { useState, useRef, useEffect } from 'react';
import { searchPokemon } from '../../helpers/searchPokemon';
import './index.css'

/*
COMPONENTE DE EXEMPLO POIS A RESPONSABILIDADE DA BUSCA
NAO DEVERIA SER DO INPUT SALVO EM CASO DE REUSO
*/

const defaultTimeout = 800;
const placeholder = "Digite um pokemon..."

const SearchInput = ({ onAfterSearch, isFetchingPokemon }) => {
    const [value, setValue] = useState('');
    const debounce = useRef(null);
    const onChangeValue = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        async function onSearchPokemon() {
            isFetchingPokemon(true);
            const pokemon = await searchPokemon(value);
            onAfterSearch(pokemon);
            isFetchingPokemon(false);
        }
        if(debounce.current) {
            clearTimeout(debounce.current);
        }
        debounce.current = setTimeout(onSearchPokemon, defaultTimeout);
    }, [value, isFetchingPokemon, onAfterSearch])

    return(
        <input type="text" value={value} placeholder={placeholder} onChange={onChangeValue} />
    )
}

export default SearchInput;