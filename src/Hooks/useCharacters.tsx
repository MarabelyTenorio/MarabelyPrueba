import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IAPIRickAndMorty } from 'interfaces/ApiRickAndMorty';
import CharactersRecoil from '../Store/characters/CharactersRecoil';
import CharactersList from '../Components/CharactersList';

function useCharacters() {
  const [charactersList, setCharactersList] = useRecoilState(CharactersRecoil);
  const [loadingCharacterList, setLoadingCharacterList] = useState(false);

  const getPageCharactersList = async () => {
    const getData = await fetch(`https://rickandmortyapi.com/api/character/?page=${charactersList.activePage}`);
    const data = await getData.json();
    return data as IAPIRickAndMorty;
  };

  const handleSearchCharacterListRickAndMorty = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    //console.log((await getPageCharactersList().then()).results.filter((item) => { return item.name.toLowerCase().includes(e.target.value.toLowerCase())} ));
    // Aqui iria la funcionalidad de la busqueda de los personajes
  };

  return {
    charactersList,
    getPageCharactersList,
    handleSearchCharacterListRickAndMorty,
    loadingCharacterList,
  };
}

export default useCharacters;
