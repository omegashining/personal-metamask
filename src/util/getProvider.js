import { ethers } from "ethers";
const fs = require('fs');

const getProvider = async () => {
    let provider;

    if (typeof window.ethereum !== 'undefined') {
        console.log('web3');
        provider = new ethers.providers.Web3Provider(window['ethereum']);

        window.ethereum.enable();
    } else {
        console.log('infura');
        const infuraKey = fs.readFileSync(".infura").toString().trim();
        
        provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${infuraKey}`);
    }

    return provider;
};

export default getProvider;