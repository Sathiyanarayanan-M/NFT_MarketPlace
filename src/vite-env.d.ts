/// <reference types="vite/client" />

interface ReactChildren {
    children: React.ReactNode;
}

interface Window {
    ethereum: any
}
interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_CoinImageURI: string;
    readonly VITE_PINATA_KEY: string;
    readonly VITE_PINATA_SECRET: string;
    readonly VITE_ALCHEMY_KEY: string;
    readonly VITE_ALCHEMY_NETWORK_API: string;
    readonly VITE_MORALIS_APPLICATION_ID: string;
    readonly VITE_MORALIS_SERVER_URL: string;
    readonly VITE_MORALIS_API_KEY: string;
    readonly VITE_MORALIS_API_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
