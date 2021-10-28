import {ethers, BigNumber} from "ethers";
import InputDataDecoder from "ethereum-input-data-decoder-without-fs";

export const converter = (param) => {
    return (value) => {
        return ethers.utils.formatUnits(value, param);
    }
}

export const expandTo18Decimals = (n) => {
    return BigNumber.from(n).mul(BigNumber.from(10).pow(18))
}

// Return string representation of objects like BigNumber
const getValue = (value) => {
    return value;
}

export const decoder = (abi, lenght, data) => {
    const decoder = new InputDataDecoder(abi);
    const result = decoder.decodeData(data).inputs;
    const values = result[0];

    for (let i = 0; i < lenght; i++) {
        console.log(`${i}: ${getValue(values[i])}`)
    }
}
