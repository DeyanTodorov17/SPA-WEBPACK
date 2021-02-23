import { Router } from "@vaadin/router";
const url = 'https://movies-97408-default-rtdb.firebaseio.com/';

const moviesService = {
    async getAllMovies(){
        let f = await fetch(`${url}.json`)
        return f.json()
    },
    async oneMovie(id){

    },
}

export default moviesService