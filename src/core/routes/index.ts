import { URL_HOMEPAGE, URL_UIKIT } from '../constants';
import { IRoutes } from '../types';
import Homepage from '../../screens/Homepage';
import UIKit from '../../screens/UIKit';

const routes: IRoutes = [
    {
        path: URL_HOMEPAGE,
        Component: Homepage,
        // isAuth: false, /* in case we need login-restricted pages */
    },
    {
        path: URL_UIKIT,
        Component: UIKit,
        // isAuth: false, /* in case we need login-restricted pages */
    },

    /**
     * Other routes will go here...
     */
];

export default routes;
