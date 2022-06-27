declare global {
  export interface User {
    id: string;
    name: string;
    nodeId: string;
  }

  export interface Movie {
    id: string;
    imgUrl: string;
    movieDirectorId: string;
    userCreatorId: string;
    title: string;
    releaseDate: string;
    nodeId: string;
    userByUserCreatorId: User;
  }
}

export {};
