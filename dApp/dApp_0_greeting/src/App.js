import { useState } from 'react';
import { ethers } from 'ethers'

// Import ABI Code to interact with smart contract
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import logo from './logo.svg';
import './App.css';

// The contract address
const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  // Helper Function (interact with smart contract)

  // Request access to the user's Meta Mask Account
  // https://metamask.io
  async function requestAccount() {
    await window.ethereum.request( { method: 'eth_requestAccounts' } )
  }

  // Fetches the current value store in greeting
  async function fetchGreeting() {
    // If MetaMask exists
    if(typeof window.ethereum !== "undefined"){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet();
        console.log("data : ", data);
      } catch (error) {
        console.log('Error: ', error);
      }
    }
  }

  return (
    <div className="App">
      <div className='App-header'>
        {/* DESCRIPTION */}
        <div className="description">
          <h1>Greeter.sol</h1>
          <h3>Full stack dapp using ReactJS and Hardhat</h3>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button style={{ backgroundColor : 'green' }}>Fetch Greeting</button>
          <button style={{ backgroundColor : 'red' }}>Set Greeting</button>
        </div>
        {/* INPUT TEXT - String */}
        <input placeholder='Set Greeting Message' />
      </div>
    </div>
  );
}

export default App;
