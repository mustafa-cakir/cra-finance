// import { IEX_BASE_DOMAIN, IEX_TOKEN } from '../../core/constants/apis';

const fetchIEX = (API: string) => {
    return fetch(`${window.location.origin}/dummyData/dummyCompanyData.json?api=${API}`);
    // return fetch(`${IEX_BASE_DOMAIN}${API}?token=${IEX_TOKEN}`);
};

export default fetchIEX;
