// export async function getGenre(genre: number){
//      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`, {
//       method: "GET",
//       headers: {
//         accept: "application/json",
        
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
//       },
//     });

//     const data = await res.json();
//     return data.results;
// }

export async function getGenre(
  genre: number,
  type: "movie" | "tv",
  language?: string, // e.g., "ja" for anime, "ko" for kdrama
  page: number = 1
) {
  let url = `https://api.themoviedb.org/3/${type}/popular?with_genres=${genre}&sort_by=popularity.desc&page=${page}`;

  if (language) {
    url += `&with_original_language=${language}`;
  }

   console.log(url)

  try {
    const res = await fetch(url, {
      method: "GET",
     headers: {
        accept: "application/json",
        
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
      },
    });

    if (!res.ok) {
      throw new Error(`TMDb API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch genre content:", error);
    return [];
  }
}



export async function getMovie(id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
    },
  });

  const resCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
    },
  });

  if (!res.ok || !resCredits.ok) {
    throw new Error(`Failed to fetch movie with ID ${id}: ${res.status}`);
  }

  const result = await res.json();
  const credits = await resCredits.json();
  const casts = credits.cast

  return { result, casts };
}

export async function getTV(id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
    },
  });

  const resCredits = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I",
    },
  });

  if (!res.ok || !resCredits.ok) {
    throw new Error(`Failed to fetch tv with ID ${id}: ${res.status}`);
  }

  const result = await res.json();
  const credits = await resCredits.json();
  const casts = credits.cast

  return { result, casts };
}

