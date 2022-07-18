class DataSource {
    static searchMovie(keyword) {
        const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=d7050fdc3d932b1e8295461726f73837&language=en-US&include_adult=false&query=";
        return $.ajax({
            method: 'GET',
            url: `${baseUrl}${keyword}`,
            dataType: 'json'
        })
        
        .then(responseJson => {
            if (responseJson.results.length > 0) {
                console.log(responseJson.results);
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} hasil tidak ditemukan!`);
            }
        });
    }
}

export default DataSource;