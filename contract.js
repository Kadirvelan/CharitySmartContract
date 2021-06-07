let contractAddress = "0xae4FF9eB70E87c22D0E56a02f6edAa27B485e6FB";

let admin;

var pad;

const abi=[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "ApplicantPayout",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_message",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_username",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "CharityEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_createaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "Adminlogin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ApplicantCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
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
        "name": "Applicants",
        "outputs": [
            {
                "internalType": "address",
                "name": "appaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "reason",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_appaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "ApplyForFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_appaddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_EtherValue",
                "type": "uint256"
            }
        ],
        "name": "ApproveApplicant",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_appaddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_EtherValue",
                "type": "uint256"
            }
        ],
        "name": "DisApproveApplicant",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "charityCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            }
        ],
        "name": "contributeMessage",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_createaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "createAccount",
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
        "name": "donators",
        "outputs": [
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "username",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSummary",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_createaddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "login",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "organization",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const web3 = new Web3("http://127.0.0.1:7545")

const contract = new web3.eth.Contract(abi, contractAddress)
contract.methods.getSummary().call().then((e) => {
    admin = e;
})

var indext=0;

const Get_summary = async() => {
    var res;
    await contract.methods.getSummary().call().then(e => res = e)
    await contract.methods.ApplicantCount().call().then(e=>ac=e)
    if (res) {
        _arr = res;
        console.log(res[0], res[1], res[2]);
        var balance = (res[0]/1000000000000000000).toFixed(2);
        var donors = res[1];
        var applicants = ac;

        if (balance == "")
            balance = "...";
        if (donors == "")
            donors = "...";
        if (applicants == "")
            applicants = "...";
        document.getElementById("contract_bal").innerHTML = balance;
        document.getElementById("contract_donors").innerHTML = donors;
        document.getElementById("contract_applicants").innerHTML = applicants;
    } else
        alert("Couldn't Add!..");

}

const Get_Applicants = async() => {
    var resArr = [];
    var Appcount;
    await contract.methods.ApplicantCount().call().then(e=>Appcount=e);
    console.log(Appcount);
    
    var array=[];

    for(let i=0;i<Appcount;i++){
        await contract.methods.Applicants(i).call().then(e=>resArr=e);
        console.log(resArr);
        
            let c1 = resArr[0];
            let c2 = resArr[1];
            let c3 = resArr[2];
            let c4 = resArr[3];
            let Apparr = [];
            Apparr.push(c1,c2,c3,c4);
            console.log(Apparr);
            array.push(Apparr);
            console.log(array);

    }

    table = document.getElementById("table");
    for (var i = 0; i < array.length; i++) {
        if(array[i][3]=="Pending"){
        var row = table.insertRow(table.length);
        console.log(array);
        for (var j = 0; j < array[i].length; j++) {
            var cell = row.insertCell(j);

            cell.innerHTML = array[i][j];
            if (j == array[i].length - 1 && array[i][j]=="Pending") {
                console.log(array[i][0]);
                let addr=array[i][0];
                pad=array[i][0];
                console.log(pad);
                console.log(addr);
                localStorage.setItem("Feedacc", addr);
                var btn = "<button type=\"button\" class=\"btn btn-success\" id=\"Paybutton\" onclick=\"PayApplicant("+`pad`+","+array[i][2]+")\">Pay</button>"
                var cellBtn = row.insertCell(j + 1);
                cellBtn.innerHTML = btn;
                btn = "<button type=\"button\" class=\"btn btn-danger\" onclick=\"DeclineApplicant("+`pad`+","+array[i][2]+")\">Decline</button>"
                cellBtn = row.insertCell(j + 2);
                cellBtn.innerHTML = btn;
            }
        }
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // cell1.innerHTML = "NEW CELL1";
        // cell2.innerHTML = "NEW CELL2";
    }
}
}

const Createaccount = async()=>{
    let caccount= document.getElementById("Address").value;
    let password=document.getElementById("Password").value;

    await contract.methods.createAccount(caccount,password).send({from:caccount,gas: 3000000}).then(e=>res = e)
    if (res)
        alert("Account created");
    else
        alert("Account not created");
}

const Loginaccount = async()=>{
    let laccount= document.getElementById("Address").value;
    let password=document.getElementById("Password").value;

    await contract.methods.login(laccount,password).call().then(e=>res = e)
    if (res){
        localStorage.setItem("LoggedAcc", laccount);
        //var number = localStorage.getItem("key");
        alert("Logged in!");
    }
    else
        alert("Try again!");
}

const Adminlogin = async()=>{
    let Aaccount= document.getElementById("Address").value;
    let password=document.getElementById("Password").value;

    await contract.methods.Adminlogin(Aaccount,password).call().then(e=>res = e)
    if (res){
        localStorage.setItem("LoggedAcc", Aaccount);
        //var number = localStorage.getItem("key");
        alert(" Admin Logged in!");
    }
    else
        alert("Try again!");
}

const Donate = async()=>{
    let username= document.getElementById("username").value;
    let amount= document.getElementById("amount").value;
    let message= document.getElementById("message").value;
    var fromaccount = localStorage.getItem("LoggedAcc");

    await contract.methods.contributeMessage(message,username).send({from:fromaccount,gas: 3000000,value:amount*1000000000000000000}).then(e=>res = e)
    if (res){
        alert("Paid!");
        console.log(res);
    }
    else
        alert("Transaction reverted!");
}

const Apply = async()=>{
    let Appaddress= document.getElementById("AppAddress").value;
    let amount= document.getElementById("amount").value;
    let purpose= document.getElementById("purpose").value;
    var fromaccount = localStorage.getItem("LoggedAcc");

    await contract.methods.ApplyForFund(Appaddress,purpose,amount).send({from:fromaccount,gas: 3000000}).then(e=>res=e);
    if (res){
        alert("Applied!");
        console.log(res);
    }
    else
        alert("Error Applying!");
}

const gettablerows = async()=>{
     console.log(table.rows.length);
}
var ind;
const listenrows = async()=>{
    var index, table=document.getElementById('table'),Payselect=document.getElementsByClassName('btn btn-success');
                console.log(table);
                console.log(table.rows.length);
                for(var i=0; i<table.rows.length;i++){
                table.rows[i].onclick=function(){
                index = this.rowIndex;
                ind=this.rowIndex;
                console.log(index);
                // Payselect[i].addEventListener("click",function(){
                //     console.log("paid");
                //     alert("Paid");
                // })
                    
                }
                
                console.log(ind);

                }
                
                
            }


var paddress="";

const PayApplicant=async(paddress,amt)=>{
  var fromaccount = localStorage.getItem("LoggedAcc");  
  var paddres=paddress;
  console.log(typeof(paddress));
  console.log(paddres);
  console.log(paddress);
  console.log(amt);
  var res;
  await contract.methods.ApproveApplicant(paddress,amt).send({from:fromaccount,gas: 3000000}).then(e=>res = e)
    if (res){
        console.log(res);
        alert("paid "+amt+" to "+paddress);
        location.reload();
    }
    else
        alert("Transaction reverted!");
        console.log(res);
  
}

const DeclineApplicant= async(paddress, amt)=>{
    var fromaccount = localStorage.getItem("LoggedAcc");  
    console.log(paddress);
    console.log(amt);
    var res;
    await contract.methods.DisApproveApplicant(paddress,amt).send({from:fromaccount}).then(e=>res=e)
    if(res){
        console.log(res);
        alert("Declined "+amt+" to "+paddress);
        location.reload();
    }else{
        alert("Transaction reverted!");
        console.log(res);
    }
  }
  
  const Get_Donors = async() => {
    var resArr = [];
    var Appcount;
    await contract.methods.getSummary().call().then(e => gs = e)
    Donor_count=gs[1];
    console.log(Donor_count);
    await contract.methods.ApplicantCount().call().then(e=>Appcount=e);
    console.log(Appcount);
    
    var array=[];

    for(let i=0;i<Donor_count;i++){
        await contract.methods.donators(i).call().then(e=>resArr=e);
        console.log(resArr);
        
            let c1 = resArr[1];
            let c2 = resArr[0];
            let c3 = resArr[2]/1000000000000000000;
            
            let Apparr = [];
            Apparr.push(c1,c2,c3);
            console.log(Apparr);
            array.push(Apparr);
            console.log(array);

    }

    table = document.getElementById("table");
    for (var i = 0; i < array.length; i++) {
        var row = table.insertRow(table.length);
        console.log(array);
        for (var j = 0; j < array[i].length; j++) {
            var cell = row.insertCell(j);

            cell.innerHTML = array[i][j];
            // if (j == array[i].length - 1 && array[i][j]=="Pending") {
            //     console.log(array[i][0]);
            //     let addr=array[i][0];
            //     pad=array[i][0];
            //     console.log(pad);
            //     console.log(addr);
            //     localStorage.setItem("Feedacc", addr);
            //     var btn = "<button type=\"button\" class=\"btn btn-success\" id=\"Paybutton\" onclick=\"PayApplicant("+`pad`+","+array[i][2]+")\">Pay</button>"
            //     var cellBtn = row.insertCell(j + 1);
            //     cellBtn.innerHTML = btn;
            //     btn = "<button type=\"button\" class=\"btn btn-danger\" onclick=\"DeclineApplicant("+`pad`+","+array[i][2]+")\">Decline</button>"
            //     cellBtn = row.insertCell(j + 2);
            //     cellBtn.innerHTML = btn;
            // }
        }
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // cell1.innerHTML = "NEW CELL1";
        // cell2.innerHTML = "NEW CELL2";
    }
}

const Get_ApplicantHistory = async() => {
    var resArr = [];
    var Appcount;
    await contract.methods.ApplicantCount().call().then(e=>Appcount=e);
    console.log(Appcount);
    
    var array=[];

    for(let i=0;i<Appcount;i++){
        await contract.methods.Applicants(i).call().then(e=>resArr=e);
        console.log(resArr);
        
            let c1 = resArr[0];
            let c2 = resArr[1];
            let c3 = resArr[2];
            let c4 = resArr[3];
            let Apparr = [];
            Apparr.push(c1,c2,c3,c4);
            console.log(Apparr);
            array.push(Apparr);
            console.log(array);

    }

    table = document.getElementById("table");
    for (var i = 0; i < array.length ; i++) {
       if(array[i][3]=="Paid out"){
        var row = table.insertRow(table.length);
        console.log(array[i][3]);
        for (var j = 0; j < array[i].length; j++) {
            var cell = row.insertCell(j);

            cell.innerHTML = array[i][j];
            if (j == array[i].length - 1 ) {
                console.log(array[i][0]);
                let addr=array[i][0];
                pad=array[i][0];
                console.log(pad);
                console.log(addr);
                // localStorage.setItem("Feedacc", addr);
                // var btn = "<button type=\"button\" class=\"btn btn-success\" id=\"Paybutton\" onclick=\"PayApplicant("+`pad`+","+array[i][2]+")\">Pay</button>"
                // var cellBtn = row.insertCell(j + 1);
                // cellBtn.innerHTML = btn;
                // btn = "<button type=\"button\" class=\"btn btn-danger\" onclick=\"DeclineApplicant("+`pad`+","+array[i][2]+")\">Decline</button>"
                // cellBtn = row.insertCell(j + 2);
                // cellBtn.innerHTML = btn;
            }
        }
  }
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // cell1.innerHTML = "NEW CELL1";
        // cell2.innerHTML = "NEW CELL2";
    }
}
