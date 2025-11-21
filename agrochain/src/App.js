import { useContext, useEffect, useState } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import MarketplaceAbi from './frontend/contractsData/Marketplace.json'
import MarketplaceAddress from './frontend/contractsData/Marketplace-address.json'
import NFTAbi from './frontend/contractsData/NFT.json'
import NFTAddress from './frontend/contractsData/NFT-address.json'
import { ethers } from "ethers"

import Navigation from "./Components/Navigation";
import { NFT } from "./Components/NFT";
import { NFTDetails } from "./Components/NFTDetails";
import Profile from "./Components/Profile";
import { Register } from "./Components/Register";
import { Front } from "./Components/Front";
import Certificate from "./Components/Certificate/Certificate";
import { NftContext } from "./frontend/NftContext/NftProvider";

import './App.scss';
import MainScreen from './Components';

const normalizeChainId = (value) => {
    if (!value) return '0x7c6'
    if (typeof value === 'number') {
        return `0x${value.toString(16)}`
    }
    const chainString = value.toString().trim()
    if (/^0x/i.test(chainString)) {
        return `0x${chainString.replace(/^0x/i, '')}`
    }
    const decimalValue = Number(chainString)
    return Number.isNaN(decimalValue) ? '0x7c6' : `0x${decimalValue.toString(16)}`
}

const QIE_TOKEN_SYMBOL = process.env.REACT_APP_QIE_TOKEN_SYMBOL || 'QIE'
const QIE_CHAIN_ID = normalizeChainId(process.env.REACT_APP_QIE_CHAIN_ID || '0x7c6')
const QIE_NETWORK_NAME = process.env.REACT_APP_QIE_NETWORK_NAME || 'QIE Mainnet'
const QIE_NATIVE_NAME = process.env.REACT_APP_QIE_NATIVE_NAME || 'QIE'
const QIE_RPC_URL = process.env.REACT_APP_QIE_RPC_URL || 'https://rpc1.qie.digital'
const QIE_EXPLORER_URL = process.env.REACT_APP_QIE_EXPLORER_URL || 'https://www.mainnet.qie.digital'

const QIE_CHAIN_PARAMS = {
    chainId: QIE_CHAIN_ID,
    chainName: QIE_NETWORK_NAME,
    nativeCurrency: {
        name: QIE_NATIVE_NAME,
        symbol: QIE_TOKEN_SYMBOL,
        decimals: 18,
    },
    rpcUrls: [QIE_RPC_URL],
    blockExplorerUrls: [QIE_EXPLORER_URL],
}


function App() {
    const { setAccount, setMarketplace, setNFT, setBalance, setIsLoading, account, setAccountType } = useContext(NftContext);
    const [loading, setLoading] = useState(true)

    const loadContracts = async (signer, activeAccount = account) => {
        // Get deployed copies of contracts
        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
        setMarketplace(marketplace)
        if (activeAccount) {
            const fam = await marketplace.farmers(activeAccount)
            setAccountType(!!fam.name)
        } else {
            setAccountType(false)
        }
        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
        setNFT(nft)
        setLoading(false)
    }

    const ensureQieNetwork = async () => {
        if (!window.ethereum) {
            throw new Error('Metamask not detected')
        }
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: QIE_CHAIN_PARAMS.chainId }]
            })
        } catch (switchError) {
            if (switchError.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [QIE_CHAIN_PARAMS]
                })
            } else {
                throw switchError
            }
        }
    }

    const web3Handler = async () => {
        if (!window.ethereum) {
            alert('Install metamask extention');
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await ensureQieNetwork()
            const selectedAccount = accounts[0]
            setAccount(selectedAccount)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const balance = await provider.getBalance(selectedAccount)
            const balances = ethers.utils.formatEther(balance);
            setBalance(balances)
            await loadContracts(signer, selectedAccount)
            setIsLoading(true)
        } catch (error) {
            console.error('Failed to connect to the QIE network', error)
            alert('Unable to connect to the QIE network. Please check your wallet configuration and try again.')
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', (chainId) => {
                window.location.reload();
            })

            window.ethereum.on('accountsChanged', async function (accounts) {
                setAccount(accounts[0])
                await web3Handler()
            });
        }
    });

    useEffect(() => {
        const storedAccount = localStorage.getItem('account');
        if (storedAccount) {
            (async () => {
                if (!window.ethereum) {
                    return
                }
                try {
                    await ensureQieNetwork()
                    setAccount(storedAccount)
                    const provider = new ethers.providers.Web3Provider(window.ethereum)
                    const signer = provider.getSigner();
                    const balance = await provider.getBalance(storedAccount);
                    const balances = ethers.utils.formatEther(balance);
                    setBalance(balances)
                    await loadContracts(signer, storedAccount)
                    setIsLoading(true)
                } catch (error) {
                    console.error('Failed to restore QIE session', error)
                }
            })();
        }
    }, []);

    useEffect(() => {
        if (!!account) {
            localStorage.setItem('account', account);
        }
    }, [account]);

    return (
        <>
            <Navigation web3Handler={web3Handler} />
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="nft" element={<NFT />} />
                <Route path="nft-details" element={<NFTDetails />} />
                <Route path="certificate" element={<Certificate />} />
                <Route path="payment" element={<MainScreen />} />
                <Route path="*" element={<Front />} />
            </Routes>
        </>
    );
}

export default App;
