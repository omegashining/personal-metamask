import Web3 from 'web3';
const fs = require('fs');

const getWeb3 = async () => {
    let web3;

    if (typeof window.ethereum !== 'undefined') {
        console.log('web3');
        web3 = new Web3(window['ethereum']);
    } else {
        console.log('infura');
        const infuraKey = fs.readFileSync(".infura").toString().trim();
        let ropsten = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/" + infuraKey);

        web3 = new Web3(ropsten);
    }

    window.ethereum.enable();

    return web3;
};

export default getWeb3;