import axios from "axios";
export async function getTopMovies() {
  try {
    const allMovies = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "5f713f4e-abf0-49c2-b597-b67b7f6d4ea6",
          "Content-Type": "application/json",
        },
      },
    );
    return(allMovies.data.items);
  } catch (e) {
    console.log(e);
  }
}
