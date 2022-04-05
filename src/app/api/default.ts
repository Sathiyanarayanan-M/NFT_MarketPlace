import * as Axios from 'axios';
import * as AxiosCacheAdapter from 'axios-cache-adapter'
import * as ReactQuery from 'react-query';
import * as Constants from "src/constants";

const cache = AxiosCacheAdapter.setupCache({
    maxAge: 15 * 60 * 1000
});

export const CoinsClient = Axios.default.create({
    baseURL: "",
    adapter: cache.adapter,
});

export const MainnetAPI = Axios.default.create({
    baseURL: `${Constants.Config.AlchemyMainnetAPI}${Constants.Config.AlchemyKey}/`,
});

export const RobstenAPI = Axios.default.create({
    baseURL: `${Constants.Config.AlchemyRobstenAPI}${Constants.Config.AlchemyKey}/`,
});

