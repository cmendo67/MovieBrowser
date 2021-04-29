export const movie_search = async title =>{
  let api_key = "e607cd81"
  const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}&`;
    const resp = await fetch(url);
    const { Search } = await resp.json();
    return Search;
}

export const movie_Id = async id => {
  let api_key = "e607cd81"
  const url = `http://www.omdbapi.com/?apikey=${api_key}&i=${id}`;
    const resp = await fetch(url);
    const output = await resp.json();
    return output;
}

