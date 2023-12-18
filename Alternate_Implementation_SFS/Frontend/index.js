import { abi, contractAddress } from "./constants.js"
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
const connectButton = document.getElementById("Connect");
const Show_BalanceButton = document.getElementById("Show_Balance");
const WithdrawButton = document.getElementById("Withdraw_share");
const DistributeButton = document.getElementById("Distribute");
const RegisterButton = document.getElementById("Register");



connectButton.onclick = connect
Show_BalanceButton.onclick = showBalance
WithdrawButton.onclick = Withdraw
DistributeButton.onclick = Distribution
RegisterButton.onclick = register_to_SFS




async function basic() {
    let provider, signer, contract, bool;

    if (typeof window.ethereum !== "undefined") {
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);
        bool = true;

    } else {
        fundButton.innerHTML = "Please install MetaMask";
        bool = false;

    }

    console.log("provider", provider);
    console.log("signer", signer);
    console.log("contract", contract);
    console.log("bool", bool);




    return { provider, signer, contract, bool };
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

function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) => {
                console.log(
                    `Completed with ${transactionReceipt.confirmations} confirmations. `
                )
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}

async function showBalance() {
    const { provider, signer, contract, bool } = await basic();

    console.log("toke");
    if (bool) {
        let tokenID = document.getElementById("TokenID").value;
        try {
            const balance = await contract.show_balance_to_alternate(tokenID)
            console.log(ethers.utils.formatEther(balance))
            console.log("shodw");


        } catch (error) {
            console.log(error)
        }
    }
}

async function Withdraw() {
    const { provider, signer, contract, bool } = await basic();

    console.log(provider);
    console.log(bool);

    if (bool == true) {
        console.log("if");

        let tokenID = document.getElementById("ID").value;
        console.log(tokenID);
        let amount = document.getElementById("Amount_id").value;
        console.log(amount);

        try {
            let tokenID = document.getElementById("ID").value;
            console.log("try");

            const transactionResponse = await contract.withdraw_to_alternate(tokenID, amount);
            await listenForTransactionMine(transactionResponse, provider)
        } catch (error) {
            console.log(error)
        }

    } else {
        fundButton.innerHTML = "Please install MetaMask"
    }
}


async function Distribution() {
    const { provider, signer, contract, bool } = await basic();
    if (bool == true) {
        try {
            let contract_address = document.getElementById("Contract_Address").value;
            let block_no = document.getElementById("block").value;
            let amount = document.getElementById("amount").value;


            console.log("try");

            const transactionResponse = await contract.distributeFees_to_alternate({
                    // value: ethers.utils.parseEther(amount),
                    value: amount
                },
                contract_address,
                block_no);
            await listenForTransactionMine(transactionResponse, provider)
        } catch (error) {
            console.log(error)
        }

    } else {
        fundButton.innerHTML = "Please install MetaMask"
    }
}

async function register_to_SFS() {
    const { provider, signer, contract, bool } = await basic();
    console.log("contract", contract);

    if (bool == true) {
        try {
            let add1 = document.getElementById("address1").value;
            let share1 = document.getElementById("Share1").value;
            let add2 = document.getElementById("address2").value;
            let share2 = document.getElementById("Share2").value;

            let add_array = [add1, add2];
            let share_array = [share1, share2];




            const transactionResponse = await contract.register_to_alternate(add_array, share_array);
            await listenForTransactionMine(transactionResponse, provider)
        } catch (error) {
            console.log(error)

        }
    } else {

    }






}