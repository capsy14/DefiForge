import { abi, contractAddress } from "./constants.js"
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
const connectButton = document.getElementById("Connect");
const Show_BalanceButton = document.getElementById("Show_Balance");

connectButton.onclick = connect
Show_BalanceButton.onclick = connect



async function basic() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)

    } else {
        fundButton.innerHTML = "Please install MetaMask"
    }
}

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            console.log(error)
        }
        connectButton.innerHTML = "Connected"
        const accounts = await ethereum.request({ method: "eth_accounts" })
        console.log(accounts)
    } else {
        connectButton.innerHTML = "Please install MetaMask"
    }
}