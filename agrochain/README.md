# AgroChain — QIE Frontend

This React/Hardhat workspace powers the AgroChain experience and is now fully aligned with the QIE Blockchain (chain IDs `1983` testnet / `1990` mainnet). All smart-contract deployments, wallet flows, and explorer references point to QIE so you can mint, trade, and verify farmer NFTs directly on the network.

---

## 1. Prerequisites
- Node.js 16+
- npm 8+
- MetaMask or the [QIE Wallet](https://www.qiewallet.me) with an imported key that matches the deployer account
- A funded QIE account (see [Free Test Tokens](https://www.qie.digital/faucet))

---

## 2. Environment Variables

### Hardhat / Contracts (`agrochain/.env`)
```
PRIVATE_KEY=your_private_key_without_0x
QIE_TESTNET_RPC_URL=https://rpc1testnet.qie.digital
QIE_TESTNET_CHAIN_ID=1983
QIE_MAINNET_RPC_URL=https://rpc1.qie.digital
QIE_MAINNET_CHAIN_ID=1990
```

### React (`agrochain/.env.local`)
```
REACT_APP_QIE_CHAIN_ID=0x7BF
REACT_APP_QIE_NETWORK_NAME=QIE Testnet
REACT_APP_QIE_NETWORK_LABEL=QIE Testnet
REACT_APP_QIE_NATIVE_NAME=QIE
REACT_APP_QIE_RPC_URL=https://rpc1testnet.qie.digital
REACT_APP_QIE_EXPLORER_URL=https://www.testnet.qie.digital
REACT_APP_QIE_TOKEN_SYMBOL=QIE
```

Switch to mainnet values when you are ready to go live.

---

## 3. Install Dependencies
```
cd agrochain
npm install
```

---

## 4. Compile, Test, and Deploy to QIE
```
npx hardhat compile
npx hardhat test
npx hardhat run src/backend/scripts/deploy.js --network qieTestnet   # testnet
# or
npx hardhat run src/backend/scripts/deploy.js --network qieMainnet   # mainnet
```

Deployment artifacts land in `src/frontend/contractsData/` and are consumed automatically by the React app.

---

## 5. Launch the React App
```
npm start
```
Open `http://localhost:3000`, connect your wallet, and begin minting/buying NFTs on QIE.

---

## 6. Wallet Configuration (MetaMask or QIE Wallet)
- Network Name: `QIE Testnet`
- RPC URL: `https://rpc1testnet.qie.digital`
- Chain ID: `1983`
- Currency Symbol: `QIE`
- Block Explorer URL: `https://www.testnet.qie.digital`

Repeat with the mainnet parameters when deploying live.

---

## 7. Helpful QIE Resources
- [QIE GitBook Documentation](https://github.com/Qi-Blockchain)
- [QIE Developer Docs](https://docs.qie.digital/developer-docs)
- [SDK & Token Creator Guide](https://qiedex.qie.digital)
- [QIE Testnet](https://www.testnet.qie.digital)
- [QIE Explorer](https://www.mainnet.qie.digital)
- [Validators](https://mainnet.qie.digital/validators)
- [QIE Wallet](https://www.qiewallet.me)
- [Free Test Tokens](https://www.qie.digital/faucet)
- [Discord](https://discord.com/invite/9HCNTyqkwa)
- [Telegram Support](https://t.me/HovRonQiblockchain)
