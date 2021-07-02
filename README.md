   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


### After loading install all dependencies

```sh
$ npm install 
```

### Runs the app in the development mode

```sh
$ npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Launches the test runner in the interactive watch mode
```sh
$ npm test 
``` 

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Builds the app for production to the `build` folder
```sh
$ npm run build 
``` 
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### If you aren’t satisfied with the build tool and configuration choices, you can eject at any time
```sh
$ npm run eject 
``` 
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Test_NextJs+TypeScript project uses a number of open source libraries to work properly:

* [Next.js] - Next.js - это интерфейсная веб-среда разработки React с открытым исходным кодом, созданная Vercel, которая обеспечивает такие функции, как рендеринг на стороне сервера и создание статических веб-сайтов для веб-приложений на основе React.
* [axios] - Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.
* [dotenv] - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
* [sass] - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [styled-components] - Styled components are a CSS-in-JS tool that bridges the gap between components and styling, offering numerous features to get you up and running in styling components in a functional and reusable way. 
* [nextjs-progressbar] - A nextjs primitive for building slim progress bars.. 

# Attention 

- axios 

needs URL for work. you must create a file called .env in the root of your project's directory. Inside the .env file, write follows  

```sh
API_URL = 'yourUrl'
```
   