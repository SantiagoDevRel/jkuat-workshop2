import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import the web3 module and the ABI of my contract
import { Web3 } from "web3";
import ABI from "./abiOfMyToken.mjs";

const RECEIVER = "0x69aD3Aeb0A819A2694D36f2276fFa1306A16d484";
const JKUAT = "0xf84827dB2C4ec918eA13cbdAdB14c2c1d0f678e5";

function App() {
  // use state
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [balanceOfJKUAT, setBalanceOfJKUAT] = useState("");
  const [balanceOfReceiver, setBalanceOfReceiver] = useState("");

  // initialize the web3 library with window.ethereum (metamask)
  const web3 = new Web3(window.ethereum);

  // contract instance
  const myTokenInstance = new web3.eth.Contract(ABI, "0x81Ce37C64AE4C2eaAac3f79d225A2146e35789EA");

  // READING FUCNTIONS
  // contract instance + methods + function name + call
  async function getName() {
    const result = await myTokenInstance.methods.name().call();
    setName(result);
  }

  async function getTotalSupply() {
    const result = await myTokenInstance.methods.totalSupply().call();
    setTotalSupply(result.toString());
  }

  async function getBalanceOfJKUAT() {
    const result = await myTokenInstance.methods.balanceOf(JKUAT).call();
    setBalanceOfJKUAT(result.toString());
  }

  async function getBalanceOfReceiver() {
    const result = await myTokenInstance.methods.balanceOf(RECEIVER).call();
    setBalanceOfReceiver(result.toString());
  }

  // WRITING FUNCTIONS
  async function requestAccountsToTheUser() {
    const arrayOfAddresses = await web3.eth.requestAccounts();
    return arrayOfAddresses;
  }

  async function mint() {
    const accounts = await requestAccountsToTheUser();
    await myTokenInstance.methods.mint10tokens().send({ from: accounts[0] });
    await getBalanceOfJKUAT();
    await getBalanceOfReceiver();
    await getTotalSupply();
  }

  async function burn() {
    const accounts = await requestAccountsToTheUser();
    await myTokenInstance.methods.burn10tokens().send({ from: accounts[0] });
    await getBalanceOfJKUAT();
    await getBalanceOfReceiver();
    await getTotalSupply();
  }

  async function transfer() {
    const accounts = await requestAccountsToTheUser();
    await myTokenInstance.methods.transfer10tokens(RECEIVER).send({ from: accounts[0] });
    await getBalanceOfJKUAT();
    await getBalanceOfReceiver();
    await getTotalSupply();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={getName}>Get Name</button>
        <p>Name: {name} </p>

        <button onClick={getTotalSupply}>Get Total Supply</button>
        <p>Total Supply: {totalSupply}</p>

        <button onClick={getBalanceOfJKUAT}>Get Balance Of JKUAT</button>
        <p>Balance Of JKUAT: {balanceOfJKUAT}</p>

        <button onClick={getBalanceOfReceiver}>Get Balance Of Receiver</button>
        <p>Balance Of Receiver: {balanceOfReceiver}</p>

        <button onClick={mint}>Mint 10 tokens</button>
        <button onClick={burn}>Burn 10 tokens</button>
        <button onClick={transfer}>Transfer 10 tokens</button>
      </header>
    </div>
  );
}

export default App;
