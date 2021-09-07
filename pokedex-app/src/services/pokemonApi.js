import axios from 'axios';

const DB_PATH = 'http://localhost:8000/pokemons';
const PAGE_LIMIT = 12;
const IMG_PATH = './pokemons/';
const DEFAULT_IMG_PATH = 'defaultPokemon.png';

class PokemonApiService {

    fetchPokemonList(currentPage, MyPokemonsQuery) {
        return axios.get(`${DB_PATH}?${MyPokemonsQuery}_limit=${PAGE_LIMIT}&_page=${currentPage}`)
    }

    fetchPokemonImg(id) {
        return (id <= 720 || id > 1) ? IMG_PATH + id +'.png' : DEFAULT_IMG_PATH
    }

    getPokemonData(id) {
        return axios.get(`${DB_PATH}/${id}`)
    }

    putPokemonData(id, name) {
        return axios.put(`http://localhost:8000/pokemons/${id}`, {
            name,
            id, 
            isCaught: true,
            date: new Date() 
            })
    }
}

export default new PokemonApiService();