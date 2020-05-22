## Name of Project 
* Fetch ART

## Names of the team members
* Jaime Sanders, Max Lamb, Briseida Pagador and Breeann Bolinsky

## A description of the project
* This is an app made for those seeking a meditative space to find images inspired by a mood and to create a personalized favorites gallery.
* The overall problem domain and how the project solves those problems

## Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
* 1.0.00

## A list of any libraries, frameworks, or packages that your application requires in order to properly function
* Unsplash as our API 
* gradient for background gradient transition
* webkit-linear-gradient for about us header gradient

 
## Instructions that the user may need to follow in order to get your application up and running on their own computer
* Signup with us if you haven't already by clicking the Signup Button on the Splash Page
* If you have, you can click the Login Button to login
* Input your email and password 
* On the Mood Page, click on the mood button that you want to view images of that feeling, so you can have that feeling too!
* Then, click on the individual image that you would like to save for later 
* Finally, you can go to your Favorites Page to view your favorite feelings. 
* If you no longer like your image, you can also remove it 

## Clearly defined API endpoints with sample responses
* Endpoint: app.get'/api/list/:mood'
    * Response: Gets a list of images based on the type of mood button that the user selects, such as a list of Happy Images upon Clicking Happy Button
* Endpoint: app.get('/api/favorites'
    * Response: Select all from favorites database based  upon the user's specific id and token when logged in
* Endpoint: app.get('/api/detail/:id'
    * Response: From unsplash, get an image based on specific id of that image assigned by the API. 
* Endpoint: app.delete('/api/favorites/:id
    * Response: Remove an image from the favorites page based upon the user who is signed in and their id 
 
## Clearly defined database schemas

FA Wireframe.jpg

https://drive.google.com/file/d/1p_GivbSWw1lN0XtNGEeu7k1mmPKKK-SL/view?usp=sharing

## User story: 
* "As a person who wants to find an app that helps calm and relax, I want view different moods that will uplift me, so that I can feel those same moods through imagery."

## Conflict Plan
* What will your group do when it encounters conflict?
    * We've gone through and agreed, that if we are unable to come to an agreement, that we would bring in the opinion of a TA or TAs, to find what the best course of action would be of the options we could not agree upon. 
* How will you raise concerns to members who are not adequately contributing?
    * By directly speaking to someone, in a private setting, to address the issue. If needed, we could bring in a mediator, such as a TA. 
* How and when will you escalate the conflict if your attempts are unsuccessful?
    * If after discussed individually, in private, we will escalate to a TA to intervene. 

## Communication Plan 
* Managing TA Help 
* If we are stuck on a problem for more than 10 minutes, organizing help from others in our group and then asking the TAs for help if we are still stuck
Using our Kanban/Miro board, organizing what needs to be completed, communicating if there is a task that we may have issues moving forward on 
* How will you communicate after hours and on the weekend?
    * Slack/Text
* What is your strategy for ensuring everyone's voices are heard?
    * By making sure that we all agree, and asking 
* How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?
    * Checking in with eachother, asking that everyone agrees and if anyone has any further input to contribute at that time. 


_______________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://nameless-hollows-93608.herokuapp.com](http://nameless-hollows-93608.herokuapp.com) to view it in the browser.

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


