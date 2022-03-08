import { IUser } from '../types';

export const getUserStateFromLocalStorage = (): IUser | null => {
    try {
        const user = localStorage.getItem(`user_data`);
        if (user) return JSON.parse(user) as IUser;
    } catch (err) {
        // error locaStorage
    }
    return null;
};

export const setUserStateToLocalStorage = (user: IUser): void => {
    try {
        localStorage.setItem(`user_data`, JSON.stringify(user));
    } catch (err) {
        // error locaStorage
    }
};

export const addStringValueIntoArrayIfNotExist = (arr: string[], val: string): string[] => {
    if (!arr) return [];
    return arr?.indexOf(val) === -1 ? [...arr, val] : arr;
};

export const removeStringValueFromArrayIfExist = (arr: string[], val: string): string[] => {
    if (!arr) return [];
    return arr?.filter(x => x !== val);
};
