declare global {
  export interface User {
    id: string;
    name: string;
  }

  export interface Review {
    id: string;
    title: string;
    body: string;
    rating: number;
    movieByMovieId: Movie;
    userByUserReviewerId: User;
  }

  export interface Movie {
    id: string;
    imgUrl: string;
    title: string;
  }
}

export {};
