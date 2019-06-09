
// add keys to based on index
const addKeys = (val, key) => ({key: key+"", ...val})

export const fetchMovies = async(name) => {
    const url = `http://www.omdbapi.com/?apikey=e3195fb3&s=${name}&plot=short`
    try {
        const response = await fetch(url);
        const results = await (JSON.parse(response["_bodyInit"]))["Search"];
        if (results === undefined) {
            return;
        }
        return (JSON.parse(response["_bodyInit"]))["Search"].map(addKeys);
    }
    catch (e) {
        return;
    }
}

export const fetchMovieDetails = async(movieId) => {
    const url = `http://www.omdbapi.com/?apikey=e3195fb3&i=${movieId}&plot=full`
    try {
        const response = await fetch(url);
        const result = await (JSON.parse(response["_bodyInit"]));
        console.log("FETCHED RESULT");
        console.log(result);
        if (result === undefined) {
            return;
        }
        return result;
    }
    catch (e) {
        return;
    }
}