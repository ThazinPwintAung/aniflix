import {createContext} from 'react'

export const SearchContext = createContext({
    animeData: [],
    singleData: {},
    search: () => {},
    searchByGenre: () => {},
    setData: () => {},
    setSingle: () => {},
    isLoading: false,
});