import { IEX_BASE_DOMAIN, IEX_TOKEN } from '../constants/apis';

const FetchIEX = (API: string) => {
    // return fetch(`${window.location.origin}/dummyData/dummyQuoteData.json?api=${API}`);
    return fetch(`${IEX_BASE_DOMAIN}${API}?token=${IEX_TOKEN}`).then(res => res.json());
};

export default FetchIEX;
