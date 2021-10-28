import ERC20 from "./../../contracts/abi/ERC20.json";

export const TOKENS = {
  WETH: {
    address: '0xc778417e063141139fce010982780140aa0cd5ab',
    abi: ERC20,
    decimals: 18
  },
  TEST: {
    address: '0xa64a5e199a8f11970386457a502cf45053acb2a2',
    abi: ERC20,
    decimals: 8
  },
  GBPT: {
    address: '0x1a79f96d0d9b60a7b1ca979a44c54bd53f1aa236',
    abi: ERC20,
    decimals: 8
  },
  NONE: {
    address: '0x0000000000000000000000000000000000000000'
  }
}

// Ropsten WETH
0xc778417E063141139Fce010982780140Aa0cD5Ab
// Mainnet WETH
0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2