import * as Axios from 'axios';
import * as ReactQuery from 'react-query';
import * as Constants from "src/constants";

export const CoinsClient = Axios.default.create({
    baseURL: "",
});
