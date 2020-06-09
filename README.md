
<p align='center'><img src="https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/RnM-icon.png"></p>
<h1 align='center'>Rick-And-Morty-DB </h1>
<p align='center'>This is my second project with using Vue.js and vue-ecosystem<br>using open <a href="https://rickandmortyapi.com/">REST API</a> with data about all character from <a href="https://en.wikipedia.org/wiki/Rick_and_Morty">Rick and Morty</a> cartoon</p>

<hr>

<h2> Local install and other command </h2>

Install all dependencies 
```sh
$ npm i
```
Run local-host and hot reloading
```sh
$ npm run serve
```
Build a prod version with minifying code
```sh
$ npm run build
```
Build a prod version with minifying code
```sh
$ npm run dev
```
Run test
```sh
$ npm run test
```
<hr>
  
<h2> Some screens with explanations<h2>

<h3> Main page</h3>

We have a control panel, where we can change the current page(1 - 30) by entering a value in input, or increase/decrease by click at next/prev
Every page contains up to 20 cards, and if you click at any, you change active card (on the left side) and could read more information.

![Main page](https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/MainPage.png)

<h3>Random page</h3>

This page generates random id, and get a character with this id from DB using HTTP request after that render this info into the card and we can see it. Too, for better UX I block scroll on this page using watcher on $route. At one time, the page cant has more than 3 cards.

![Random page](https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/RandomPage.png)

<h3>Search page</h3>

This page contains 2 blocks:

<b>Filters</b> - consist 2 select with 'gender' and 'status' options and text input. After the change, any of it app create HTTP request to the database and get results with data. If DB hasn't data with this filter - the user sees label about it.

<b>Results</b> - up to 20 cards with active card(like at main page)

![Search page](https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/SeatchPage.png)

<h3>Other</h3>

Status - the color of dots is calculated before rendering according to status info from request.
Navigation - change route of the app without reloading the page

![Other](https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/Other.png)

Worked with minimization, choose better font extension, add "tree shaking" and minimization plugins for `.js` and `.css`

![Minimizing](https://github.com/vakyla98/Rick-And-Morty-DB/blob/gh-pages/src/assets/readme/Minimizing.png)

<b> All techonolies here: </b>  Vue, Vue-router, Vue-test-utils / Jest , Bootstrap, Axios, Webpack, SCSS, ESlint, Babel, Prettier, npm
