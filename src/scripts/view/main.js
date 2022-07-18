import '../component/film-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {

    const searchContent = $('#searchContent');
    const btnSearchContent = $('#btnSearchContent');
    const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=d7050fdc3d932b1e8295461726f73837&language=en-US`;
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchContent.val());
            renderResult(result);            
        } 
        
        catch (message) {
            fallbackResult(message);
        }
    };

    const getFilm = async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderResult(responseJson.results);
            }
        } 
        
        catch (error) {
            showResponseMessage(error);
        }
    };

    const renderResult = (results) => {
        const listFilmContent = document.querySelector("#listMovie");
        listFilmContent.innerHTML = "";

        results.forEach(movie => {
            let thmbImg;
            if (movie.poster_path != null) {
                thmbImg = `${baseImageUrl}${movie.poster_path}`;
            } else {
            }
            listFilmContent.innerHTML += `
            <div class="col-lg-3" id="cardElement">
                    <div class="card">
                        <img src="${thmbImg}"
                                class="card-img-top" alt="Image not found">
                    </div>
                <h5 class="card-title">${movie.title}</h5>
            </div>
            `;
        });
    }

    const fallbackResult = message => {
        alert(message);
    };

    $(document).ready(function () {
        getFilm();
    });

    btnSearchContent.click(onButtonSearchClicked);
}

export default main;