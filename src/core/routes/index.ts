import { URL_HOMEPAGE } from '../constants';
import { IRoutes } from '../types';
import Homepage from '../../screens/Homepage';

const routes: IRoutes = [
    {
        path: URL_HOMEPAGE,
        Component: Homepage,
        // isAuth: false, /* in case we need login-restricted pages */
    },

    /**
     * Other routes will go here...
     */
];

export default routes;
