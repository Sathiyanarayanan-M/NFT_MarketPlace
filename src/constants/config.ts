export const CoinImageURI = import.meta.env.VITE_CoinImageURI;
export const AlchemyKey = import.meta.env.VITE_ALCHEMY_KEY;

export const AlchemyRobstenAPI = import.meta.env.VITE_ALCHEMY_ETH_ROPSTEN_API
export const AlchemyMainnetAPI = import.meta.env.VITE_ALCHEMY_ETH_MAINNET_API

export const PinataKey = {
    key: import.meta.env.VITE_PINATA_KEY,
    secret: import.meta.env.VITE_PINATA_SECRET
};

export const MolarisAPiKeys = {
    ApplicationID: import.meta.env.VITE_MORALIS_APPLICATION_ID,
    ServerURL: import.meta.env.VITE_MORALIS_SERVER_URL,
    ApiKey: import.meta.env.VITE_MORALIS_API_KEY,
    ApiSecret: import.meta.env.VITE_MORALIS_API_SECRET,
}