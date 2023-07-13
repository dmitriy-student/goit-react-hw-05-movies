export function fetchTrending() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTY3MzMxOTA5YmU4Zjg4MTA2MDEzZWIxYTYwYTNkNyIsInN1YiI6IjY0YWYyMTA3OGEwZTliMDEwMGM1NjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WsDIj4xQIdOtD9OL97Cww0iQc9BPTy1XPEO3EAQqjI',
    },
  };
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
}

export function fetchFind(query) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTY3MzMxOTA5YmU4Zjg4MTA2MDEzZWIxYTYwYTNkNyIsInN1YiI6IjY0YWYyMTA3OGEwZTliMDEwMGM1NjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WsDIj4xQIdOtD9OL97Cww0iQc9BPTy1XPEO3EAQqjI',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
}

export function fetchFindDetails(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTY3MzMxOTA5YmU4Zjg4MTA2MDEzZWIxYTYwYTNkNyIsInN1YiI6IjY0YWYyMTA3OGEwZTliMDEwMGM1NjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WsDIj4xQIdOtD9OL97Cww0iQc9BPTy1XPEO3EAQqjI',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
}

export function fetchFindCredits(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTY3MzMxOTA5YmU4Zjg4MTA2MDEzZWIxYTYwYTNkNyIsInN1YiI6IjY0YWYyMTA3OGEwZTliMDEwMGM1NjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WsDIj4xQIdOtD9OL97Cww0iQc9BPTy1XPEO3EAQqjI',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
}

export function fetchFindReviews(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTY3MzMxOTA5YmU4Zjg4MTA2MDEzZWIxYTYwYTNkNyIsInN1YiI6IjY0YWYyMTA3OGEwZTliMDEwMGM1NjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-WsDIj4xQIdOtD9OL97Cww0iQc9BPTy1XPEO3EAQqjI',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
}
