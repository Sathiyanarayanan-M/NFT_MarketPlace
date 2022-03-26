import * as Constants from "src/constants";
import * as Alchemy from "@alch/alchemy-web3";

const alchemyKey = Constants.Config.AlchemyKey;
const web3 = Alchemy.createAlchemyWeb3(alchemyKey);
