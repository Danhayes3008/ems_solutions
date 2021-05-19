# EMS Solutions - staff Management Site

## status:
[x] In Development

[ ] Live

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### contributions and acknowledgements

## acknowlegements

Whilst trying to resolve an issue with the dates in my forcasting section, i came accross a site which provided the information i needed. This quary here  `const Forcasting = await pool.query("SELECT week_start::text, week_end::text, wage_budget, sales FROM forcasting");` helps turns my week_start and week_end into strings so that they only show the tear, month and day on the browser. The artical i found the solution at <a href="https://node-postgres.com/features/types" target="_blank">node-postgres.com</a>.
