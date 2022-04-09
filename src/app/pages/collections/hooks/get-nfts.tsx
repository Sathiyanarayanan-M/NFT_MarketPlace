import * as ReactQuery from "react-query";
import type * as Axios from "axios";
import * as API from "src/app/api";

export const getNFTs = ({ ownerAddr }: GetNFTs.GetOwnerNftParams) => {
  return ReactQuery.useQuery<GetNFTs.UseQuery, Error>(["getNFTs"], () =>
    API.MainnetAPI.get<GetNFTs.Response>(`getNFTs?owner=${ownerAddr}`)
  ).data?.data;
};

export const getNFTCollections = ({
  contractAddr,
}: GetNFTs.GetContractNFTs) => {
  return ReactQuery.useQuery(["getNFTCollections"], () =>
    API.MainnetAPI.get(`getNFTsForCollection?contractAddress=${contractAddr}`)
  ).data?.data;
};

export const getNFTMetadata = ({ contractAddr }: GetNFTs.GetContractNFTs) => {
  return ReactQuery.useQuery(["getNFTCollections"], () =>
    API.MainnetAPI.get(`getNFTsForCollection?contractAddress=${contractAddr}`)
  ).data?.data;
};

export namespace GetNFTs {
  export interface GetOwnerNftParams {
    ownerAddr?: string;
  }

  export interface GetContractNFTs {
    contractAddr?: string;
  }
  export interface Response {
    blockHash: string;
    ownedNfts: OwnedNFT[];
    totalCount: number;
  }

  export interface OwnedNFT {
    balance: string;
    contract: {
      address: string;
    };
    description: string;
    id: {
      tokenId: string;
    };
    media: {
      gateway: string;
      raw: string;
    }[];
    metadata: MetaData;
    timeLastUpdated: string;
    title: string;
    tokenUri: {
      gateway: string;
      raw: string;
    };
  }

  export interface MetaData {
    image: string;
    external_url: string;
    background_color: string;
    description: string;
    attributes: Attributes;
  }

  export interface Attributes {
    value: string;
    trait_type: string;
  }

  export interface Params {}

  export type UseQuery = Axios.AxiosResponse<GetNFTs.Response>;
}
