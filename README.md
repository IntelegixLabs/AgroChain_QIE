<h1 align="center"><a href="https://main.d2dbt9k4o6rj8o.amplifyapp.com/">AgroChain</a></h1>

<h3> Problem Statement</h3>

The United States Environmental Protection Agency (EPA) estimates that 10% of CO2 is emitted by the Agri sector. On one hand, Agri companies have sustainable products and services to offer to the growers. On the other hand, without proper economic incentives, farmers are reluctant to adopt sustainable practices. Centralized platform business models have so far not succeeded in creating economic value for the farmers, even while the demand for a voluntary carbon market is increasing. What technologies and business models can enable financially incentivizing farmers to implement climate-smart practices? What are the ways the buyer has proof of authenticity? In what ways the participants including investors can derive economic value?
	
<strong>ArgoChain </strong>is an NFT application powered by the QIE Blockchain (EVM-compatible) and written in Solidity Smart Contracts. Using React and ethers.js to interact with the QIE network, a user can register as a farmer in the application, upload & mint assets to IPFS, and buy or sell NFTs inside the ArgoChain marketplace. Industrial buyers can purchase those NFTs on QIE to grant carbon credits and invest directly in farmers so they can adopt sustainable practices.

It provides a way for farmers to sell carbon credits in the form of NFT to industrial buyers who need to buy carbon credits to achieve sustainability goals, thus giving farmers money to invest in more sustainable farming practices, and a win-win situation for all, the Air Quality verification is done using IoT devices, thus acting as a verification mechanism to ensure, that money is invested by farmers to adopt more sustainable farming methods.

<b>Machine Learning Model, that can accurately predict the amount of carbon emission that can happen, from a field of 1 sq unit, based on the type of crop harvested, how much water is required, crop yield prediction, how well the irrigation is managed and other sustainable farming practices adopted, and based on it give the farmer a Carbon Score/credit that farmer can sell to the industry in exchange of Money/Crypto Currency </b>


## Features
- Farmer Registration.
- Mint NFT for Cabon Credits using Verification from IoT Data to prove sustainable farming practice is adopted.
- IoT Device data is Directly streamed to NFT for verification using Device ID and Azure IoT Hub.
- User Dashboard to view all the NFT Minted, sold, and Purchased.
- Customer/ Industries can buy NFT carbon credits to meet their ESG Goals and remain Carbon neutral companies.
- Money in the form of Cryptocurrency is directly transferred to farmers without commission and middlemen, so they can invest the money in adopting more sustainable farming methods.

## QIE Network Configuration
- **Testnet**: `https://rpc1testnet.qie.digital` — Chain ID `1983 (0x7BF)`
- **Mainnet**: `https://rpc1.qie.digital` — Chain ID `1990 (0x7C6)`
- **Native token**: QIE with 18 decimals and Explorer `https://www.mainnet.qie.digital`

### Backend / Hardhat `.env`
Create `agrochain/.env` with the following keys:
```
PRIVATE_KEY=your_private_key_without_0x
QIE_TESTNET_RPC_URL=https://rpc1testnet.qie.digital
QIE_TESTNET_CHAIN_ID=1983
QIE_MAINNET_RPC_URL=https://rpc1.qie.digital
QIE_MAINNET_CHAIN_ID=1990
```

### Frontend `.env.local`
Create `agrochain/.env.local` so the React app and wallet helpers know how to connect to QIE:
```
REACT_APP_QIE_CHAIN_ID=0x7BF
REACT_APP_QIE_NETWORK_NAME=QIE Testnet
REACT_APP_QIE_NETWORK_LABEL=QIE Testnet
REACT_APP_QIE_NATIVE_NAME=QIE
REACT_APP_QIE_RPC_URL=https://rpc1testnet.qie.digital
REACT_APP_QIE_EXPLORER_URL=https://www.testnet.qie.digital
REACT_APP_QIE_TOKEN_SYMBOL=QIE
```
Replace the values with mainnet settings when you are ready to go live.

### Live Application Demo

For video demostration refer to the YouTube link <a href="">here.</a> 

## 1. Project Architecture

<p align="center">
  <img src="DATA/AgroChain.png" />
</p>

### 2. Clone/Download the Repository

```
git clone https://github.com/IntelegixLabs/AgroChain
```

### 3. Run the .NET Backend Application (fetches the historical pollution data from a public API):

```
cd AgroChain/Rapyd.All
dotnet clean
dotnet build Agrochain.All.sln
cd Rapyd.API
dotnet watch run --Rapyd.API
```
<p align="center">
  <img src="DATA/dotnet_swagger_ui.png" />
</p>


### 4. Install Node/React Dependencies:

```
cd AgroChain/agrochain
c:\windows\system32\cmd.exe /k "C:\Users\raj71\Downloads\node-v16.20.0-win-x86\nodevars.bat"
npm install
```

### 5. (Optional) Boot up a local Hardhat development blockchain

```
npx hardhat node
```

Use this only for isolated testing. For end-to-end flows target the QIE testnet or mainnet.

### 6. Connect MetaMask (or QIE Wallet) to QIE
- Import the account that matches the `PRIVATE_KEY` used in `agrochain/.env`.
- Add a **QIE Testnet** network with:
  - `Network Name`: `QIE Testnet`
  - `New RPC URL`: `https://rpc1testnet.qie.digital`
  - `Chain ID`: `1983`
  - `Currency Symbol`: `QIE`
  - `Block Explorer URL`: `https://www.testnet.qie.digital`
- Switch to **QIE Mainnet** by using:
  - `Network Name`: `QIE Mainnet`
  - `New RPC URL`: `https://rpc1.qie.digital`
  - `Chain ID`: `1990`
  - `Currency Symbol`: `QIE`
  - `Block Explorer URL`: `https://www.mainnet.qie.digital`
- Use the [QIE Faucet](https://www.qie.digital/faucet) to fund test accounts.

<p align="center">
  <img src="DATA/metamask_config.png" />
</p>

### 7(a). Deploy Smart Contracts (QIE Testnet)
```
npx hardhat run src/backend/scripts/deploy.js --network qieTestnet
```

### 7(b). Deploy Smart Contracts (QIE Mainnet)
```
npx hardhat run src/backend/scripts/deploy.js --network qieMainnet
```

### 8. Run Tests
```
npx hardhat test
```

### 9. Launch Frontend
```
npm run start
```


### 10. Project Architecture

<p align="center">
  <img src="DATA/0.png" width="450" height="650" />
</p>

### 11. IOT Screenshots

<br />
<p align="center">
  <img src="DATA/screenshots/9.png" width="400"/>
  <img src="DATA/screenshots/10.png" width="400"/>
</p>
<br />


### 12. Application Screenshots

<br />
<p align="center">
  <img src="DATA/screenshots/0.png" width="400"/>
  <img src="DATA/screenshots/1.png" width="400"/>
  <img src="DATA/screenshots/2.png" width="400"/>
  <img src="DATA/screenshots/3.png" width="400"/>
  <img src="DATA/screenshots/4.png" width="400"/>
  <img src="DATA/screenshots/5.png" width="400"/>
  <img src="DATA/screenshots/6.png" width="400"/>
  <img src="DATA/screenshots/7.png" width="400"/>
  <img src="DATA/screenshots/8.png" width="400"/>
  <img src="DATA/screenshots/11.png" width="400"/>
</p>
<br />

## QIE Ecosystem Resources
- [QIE GitBook Documentation](https://github.com/Qi-Blockchain)
- [QIE Developer Docs](https://docs.qie.digital/developer-docs)
- [SDK & Token Creator Guide](https://qiedex.qie.digital)
- [QIE Testnet Dashboard](https://www.testnet.qie.digital)
- [QIE Mainnet Explorer](https://www.mainnet.qie.digital)
- [Validator Portal](https://mainnet.qie.digital/validators)
- [QIE Wallet](https://www.qiewallet.me)
- [Free Test Tokens](https://www.qie.digital/faucet)
- [Discord](https://discord.com/invite/9HCNTyqkwa)
- [Telegram Support](https://t.me/HovRonQiblockchain)


### Thank You




