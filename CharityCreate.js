let contractAddress="0x6c9cc958f4934eb2ab60e57f2904c4b9e20f2f9a728c9810db93cc02c13bd911";

const abi=[
    {
        "inputs": [],
        "name": "createCharity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "deployedCharities",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDeployedCharity",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let DeployedCharities;

const web3 = new Web3("http://127.0.0.1:7545")
const contract = new web3.eth.Contract(abi, contractAddress)
contract.methods.getDeployedCharity().call().then((e) => {
    DeployedCharities = e;
})