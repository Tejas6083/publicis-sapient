This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## About
A webapp with PWA enabled to checkout the information of spacex launch vehicles with respect to year or launch and land success or failure scenarios.
Link:- https://spacex-tej.herokuapp.com.

## Technology

React, Redux, Axios, Materila-UI
Error handling is done also error boundary is included to not break website and stay in the flow for better user experience and understanding.

## Use Case

On Initial Load all data will be fetched. On clicking year in Year Filter all records of particular year is fetched and similar to all other filters. But if user first selects year and then select launch and land filter the data of launch and land with respect to the year selected by user is displayed and a button is given to clear all filters applied by user which results in displaying all records. And all this are done without refreshing the page.

## LightHouse Chrome Performance Score

<img src="lighthouse_score/spacex_lighthouse_2.png" height="200" width="500">

<img src="lighthouse_score/spacex_lighthouse_1.png" height="200" width="500">


## Available Scripts

In the project directory, you can run:

### `npm init`
Initialize after cloning the repo

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
