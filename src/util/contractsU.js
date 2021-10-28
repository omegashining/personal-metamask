import {ethers} from "ethers";

export const getContract = async (address, abi, signer) => {
    return new ethers.Contract(address, abi, signer);
}

export const getTokenContract = async (TOKEN_CONTRACT, signer) => {
    return new ethers.Contract(TOKEN_CONTRACT.address, TOKEN_CONTRACT.abi, signer);
}
