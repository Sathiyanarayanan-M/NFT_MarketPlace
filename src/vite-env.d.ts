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
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
