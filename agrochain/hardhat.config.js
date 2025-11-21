require("@nomiclabs/hardhat-waffle");

const {
    PRIVATE_KEY = '',
    QIE_TESTNET_RPC_URL = '',
    QIE_TESTNET_CHAIN_ID,
    QIE_MAINNET_RPC_URL = '',
    QIE_MAINNET_CHAIN_ID,
} = process.env;

const accounts = PRIVATE_KEY
    ? [`0x${PRIVATE_KEY.replace(/^0x/, '')}`]
    : [];

module.exports = {
    solidity: "0.8.4",
    networks: {
        qieTestnet: {
            url: QIE_TESTNET_RPC_URL,
            chainId: QIE_TESTNET_CHAIN_ID ? Number(QIE_TESTNET_CHAIN_ID) : undefined,
            accounts,
        },
        qieMainnet: {
            url: QIE_MAINNET_RPC_URL,
            chainId: QIE_MAINNET_CHAIN_ID ? Number(QIE_MAINNET_CHAIN_ID) : undefined,
            accounts,
        },
    },
    paths: {
        artifacts: "./src/backend/artifacts",
        sources: "./src/backend/contracts",
        cache: "./src/backend/cache",
        tests: "./src/backend/test"
    },
};
