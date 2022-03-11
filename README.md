This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

---

Live Demo: https://mustafa-cakir-bux-zero.firebaseapp.com

---

### State Management

-   `Redux` has been used to manage the global-level or screen-level states
-   `useState` has been used in various components to keep the state closer to where is actually being used

---

### Folder Structure

-   `src/app` Global app setup and configurations used by the entire app are defined in the app folder (slices - reducer and actions -, store, routes, types and app container)
-   `src/features` Feature-specific components, Slice (Redux reducer logic and associated actions — [Redux Toolkit](#https://redux-toolkit.js.org/)), APIs, and styles are placed in the features' folder.
-   `src/common` Re-usable helpers/utils, shared components, hooks, etc. are defined in the common folder
-   `src/assets` Static assets like images, files, icons are placed in the assets' directory (global stylesheet, mixins, colors and custom UI-kit)
-   `src/screens` Includes the screen container of the page/routes

fyi: The `feature folder structure` is recommended by the [Redux style guide](#https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic). By using Redux Toolkit, We have avoided boilerplate code like actions and reducers.

### How It Works:

-   In the initial visits, user has no previously saved stocks (`favStocks`) hance the favorite stock table is empty and empty state is rendered
-   Once user start typin in the search box, after the 2 letters, search is being made to figure out if the entered stock is actually available in the stock-list
-   If there is a result, the found stock is displayed within the search dropdown;
    -   If the stock has already been in the fav-list, then the plus icon is displayed as checked-icon. Clicking the stock closes the dropdown.
    -   If the stock is not in the fav-list, then plus icon is displayed. Clicking the stock adds the stock to fav-list and closes the dropdown.
-   User's favorite stocks list is stored in the redux as follows;
    -   under `user` object => `redux.user.favStocks` as `string[]`, i.e: ['APL', 'BTC']`
    -   under `favoriteStocks` object => `redux.favoriteStocks.quotes` as `IQuote[]`
-   Search result state is stored in the redux as `redux.search.quote`, as `IQuote`
-   Fav-lists are also stored in the localStorage to keep the persistency, the value from localStorage gets setted to `redux.user.favStocks` as the default state; and each stock is fecthed to display the intiial favList using `fetchQuotesOnInit()`
    -   Upon second visits - or on page refresh - localStorage will help us retrieves the previously stored fav-list (ideally this approach should be carried to API and list should have been saved to user's profile)
-   If user clicks the remove icon from the fav-list table the clicked stock gets deleted from `redux.favoriteStocks.quoes` and `redux.user.favStocks` (localStorage also gets updated)
-   Once user clicks the theme switcher icon from the top-right corner, theme of the website is changed (light or dark). App container gets `theme-dark` or `theme-light` classname accordingly hence all components has different style for different theme. This configuration is stored in the `redux.user.theme` and as wel as in the localStorage under user object to keep the persistency
-   Once user clicks the grid/list switcher icon, favorite stocks are either displayed in a table or in grid-view. This configuration is stored in the `redux.user.listingType` and as wel as in the localStorage under user object to keep the persistency. The available options are `table` | `grid`
-   If user clicks the detail button from the favorite stocks list, the company detail modal is displayed. This component fetch the company data from `/stock/{symbol}/company` endpoint.
-   Github actions are defined, and firebase configurations are completed. CI/CD is fully applied to poject. Once a commit is pushed to `main` branch, app automatically get build and deployed to firebase (URL: https://mustafa-cakir-bux-zero.firebaseapp.com)

### Tests

-   npm package `msw` has been used to mock the API requests
-   React Testing Library has been used to run the unit and integration tests

### Test cases

-   Helper Methods / Unit Tests
    -   should `getFavStocksFromLocalStorage` method properly retrieve list from the localStorage
    -   should `setFavStocksToLocalStorage` method properly save the fav-lists to the localStore
-   Root Component
    -   should app get rendered correctly without any error
-   Search Component
    -   should component render correctly
    -   should init searching only after 2 character is typed
    -   should handle empty state properly
    -   should handle API fetch error propely
    -   should clearing the input hide the dropdown
    -   should dropdown display the found stock properly
    -   should dropdown display the found stock's fav-icon state property (filled if already in the list, empty if not in the list)
    -   should clicking the stock add the stock to user's fav-list
-   Listing Stocks Component
    -   should component render correctly
    -   should handle empty state properly
    -   should handle API fetch error propely
    -   should clicking the remove button successfully remove the stock from the fav-list
    -   should list the fav-list in a table, properly (with company name, current stock price etc.)
    -   should clicking a stock name display the details of the stock

### TODO's

-   Instead of using `/stock/{symbol}/quote` for searching, `/stock/search/{keyword}` could have been used.
-   User's favorite stocks are stored in the localStorage for persistency, this approach should be carried to user profile endpoint.
-   On initial load; user's previous favorite stocks are taken from localstorage as `['AAPL', 'GOOGLE']` and each of symbole are re-fetched from `/stock/{symbol}/quote` one by one, as the request(s) are resolved, they are appended to `redux.favoriteStocks.quote` as "first-come-first-serve", hence the order of the fav-list might be different on each page refresh. Ideally, single endpoint shoould be used to fetch-multi stock quotes at a time, the response should be in the given sorting.

## Available Scripts

In the project directory, you can run:

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
