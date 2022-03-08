This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### State Management

-   `Redux` (as a bolierplate) has been used in the global states (user, global)
-   `Context API` has used in the `My Favorites` screen (wrap the state, and make it shrarable throughout all its child components)
-   `useState` is used in the child components to keep the state closer to where is actually being used and needed

### Folder Structures

-   `src/core` includes the core functionality of the App including (routes, redux-actions, redux-reducers, redux-store, contants, apis, utils)
-   `src/assets` includes the global stylesheet, mixins, colors etc.
-   `src/screens` includes the StateContext and the screen container of the page(s)
-   `src/components` includes the components that are called by screens
-   `src/components/common` includes the common components that are being used as a child-component by the other components

### Tests

- npm package `msw` has been used to mock the API requests
- React Testing Library has been used to run the unit and integration tests

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

### How It Works:

-   In the initial visits, user has no previously saved stocks hance the favorite stock table is empty and empty state is rendered
-   Once user start typin in the search box, after the 2 letters, search is being made to figure out if the entered stock is actually available in the stock-list
-   If there is a result, the found stock is displayed within the search dropdown;
    -   If the stock has already been in the fav-list, then the star icon is filled. Clicking the stock closes the dropdown.
    -   If the stock is not in the fav-list, then star icon is empty. Clicking the stock adds the stock to fav-list and closes the dropdown.
-   During the session, the fav-lists are stored in the redux global store under user object `redux.user.favStocks` as strings of array, `['APL', 'BTC']`
-   Fav-lists are stored in the localStorage to keep the consistency and on initial load, the value from localStorage gets setted to `redux.user.favStocks` as the default state.
    -   Upon second visits - or on page refresh, localStorage will help us retrieves the previously stored fav-list (ideally this approach should be carried to API and list should have been saved to user's profile)
-   If user clicks the remove icon from the fav-list table, an "Are You Sure?" confirmation modal popup appears;
    -   If user clicks confirm, the clicked stock gets deleted from `redux.user.favStocks` (localStorage also gets updated) and confirm modal box closes
    -   If user clicks cancel, the confirmation modal box disappears, no action is taken
-   If user clicks the stock from the fav-list table, the stock details box is displayed underneath (re-clicking the stock hides the detail box)
-   One detail box wil be visible at a time, so clicking one stock hides the others (if there is any already opened). This feature works just like classic Accordion FAQ.

### Test cases

-

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
