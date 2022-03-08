export type IFavStockItem = string;

export type ITheme = 'dark' | 'light';

export type IUser = {
    theme: ITheme;
    favStocks: IFavStockItem[];
};

export type IRootState = {
    user: IUser;
};

export type IRoute = {
    Component: () => JSX.Element;
    path: string;
};

export type IRoutes = IRoute[];
