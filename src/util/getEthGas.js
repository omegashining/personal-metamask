import Units from 'ethereumjs-units';

const getEthGas = async () => {
    let url = 'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=98d9f52166be2b0ec537e1703e8bc6e0a2b923e0ea75d366393950b8d290'
    let obj = await (await fetch(url)).json();
    let gwei = (obj.fastest / 10).toString();

    return Units.convert(gwei, 'gwei', 'wei');
}

export default getEthGas;