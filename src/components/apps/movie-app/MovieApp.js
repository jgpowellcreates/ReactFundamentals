/*There are 2 issues I'd like to resolve in this project:
 1) The search takes in the right query and can return movies
   HOWEVER, they don't populate on the page until I change a figure in the search box again (after the search)
      That seems like it must be a hook issue

 2) I'd like to address movies that return without poster images.
    They need dynamic styling that can account for movies that don't have posters.
 */

import React, {useState} from 'react';
import MovieAppDisplay from './MovieAppDisplay';
import { Row } from 'reactstrap';

const baseURL = "https://api.themoviedb.org/3/search/movie/";
const key = "7f310b710f62ffa6808addb0bae50bdf";

const MovieApp = () => {
    const [result, setResult] = useState();
    const [query, setQuery] = useState('');

    const fetchResults = () => {
        let url = `${baseURL}?api_key=${key}&query=${query}&page=1&include_adult=false`;
        console.log(url);

        const moviesList = [];
        const uniqueNum = []
        console.log("This should be an empty array -->",moviesList);
        let resultNum = '';

        fetch(url)
            .then(res => {
                if(res.status !== 200) {            //check if we successfully made a request
                    throw new Error('fetch error');
                } else return res.json();
            })
            .then(json => {
                if (json.results.length === 0){  //check if we have results
                    throw new Error('no results');
                } else {                        //if we do have results, we pull a random film from the array
                    if(json.results.length < 5) {
                        resultNum = json.results.length;
                    } else {
                        resultNum = 5;
                    }
                    
                    for (let i = 1; i <= resultNum; i++) {
                        const movieNum = (Math.floor(Math.random()*json.results.length));
                        //console.log(movieNum, json.results[movieNum]);

                        if(uniqueNum.includes(movieNum)) {
                            i--;
                        } else {
                            uniqueNum.push(movieNum);
                        }
                    };
                    
                    uniqueNum.map(x => {
                        moviesList.push(json.results[x]);  
                     })
                };
            })
            .catch(err => console.log(err));

            setResult(moviesList);
    }
    return(
        <div className="main">
            <div className="mainDiv">
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={fetchResults}>Click for Movie Pic Search</button>
                <Row>
                    {!result /* || !result.poster_path */ ? null : <MovieAppDisplay movie={result} />}
                </Row>
            </div>
        </div>
    );
};

export default MovieApp;