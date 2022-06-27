<h1 align="center">
    Congress Finder
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/alexandreh92/coolmovies">


  <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/22c3be622b5d42e58c97fdd70dd127fc">


  <img alt="Repository size" src="https://img.shields.io/github/repo-size/alexandreh92/coolmovies">


  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alexandreh92/coolmovies">

  <img alt="GitHub" src="https://img.shields.io/github/license/alexandreh92/coolmovies">
</p>

<h4 align="center">
  This project is a front-end challenge which implements movie review's listing, editing and creation by given a movie.
</h4>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

![App Screenshot](https://res.cloudinary.com/dzsoc0i6y/image/upload/v1656373449/Screen_Shot_2022-06-27_at_20.42.43_jjxsjq.png)

## Technologies

This project was developed with the following technologies:

- [NextJS](https://nextjs.org)
- [Typescript][ts]
- [Material-UI](https://mui.com/pt/)
- [Redux](https://redux.js.org)
- [Redux Observable](https://redux-observable.js.org)
- [RsJS](https://rxjs.dev)
- [Apollo](https://www.apollographql.com)
- [VS Code][vscode] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

---

## What can be done next?
- Integrate SSG and SSR with Redux;
- Better error handling with Apollo Links in the ErrorLink and adding observables to failure actions;
- Add a testing library and specs.

## Setup

- Required ENV Variables:
  ```sh
  API_URL='http://localhost:5001/graphql'
  ```

- Running the project:

  ```sh
  cd coolmovies-backend
  docker-compose up -d
  cd ../coolmovies-frontend
  yarn dev
  ```

## Lint

To run linters just do:

```sh
cd coolmovies-frontend && yarn lint
```
## License

This project is under the MIT license. See the [LICENSE](https://github.com/alexandreh92/react-code-exercise/blob/master/LICENSE) for more information.

---

Thanks for the opportunity, this was made with ♥&nbsp;by alexandreh92 :wave:&nbsp; [Get in touch!](https://www.linkedin.com/in/alexandreh92/)

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
