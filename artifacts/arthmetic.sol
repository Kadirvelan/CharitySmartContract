pragma solidity 0.4.25;

contract arth{
int c;
function add(int a, int b) public {
    c = a+b;
}

function sub(int a, int b) public {
    c = a-b;
}

function mul(int a, int b) public {
    c = a*b;
}

function div(int a, int b) public {
    c = a/b;
}

function result() public view returns(int){
    return c;
}

}