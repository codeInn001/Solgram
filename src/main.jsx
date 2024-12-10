import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'


// // require('@solana/wallet-adapter-react-ui/styles.css');

// // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
// const network = WalletAdapterNetwork.Devnet;
 
// // You can also provide a custom RPC endpoint.
// const endpoint = useMemo(() => clusterApiUrl(network), [network]);

// const wallets = useMemo(
//     () => [
//         new UnsafeBurnerWalletAdapter(),
//     ],
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [network]
// );

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    
        <BrowserRouter>
          
            <App />
          
        </BrowserRouter>
      
  </StrictMode>,
)
