pragma solidity >=0.4.17 <0.7.0;

import "./ERC721.sol";
import "./SafeMath.sol";

contract CoShoe {

 uint price = 0.5 ether;
 uint shoesSold = 0;

 struct Shoe {
    address owner;
    string name;
    string image; //"file:///tmp/evince-4029/image.T1OBH0.png level)"
    bool sold;
 }

Shoe[] public shoes;

mapping (uint => address[])owner;    // mapping of shoe id to an array of addresses that holds the purchasers per shoe
mapping (address => uint) TokenBalance;

constructor() public {
 TokenBalance = 100;
 owner = msg.sender;
 image == "";
 name == "";
 sold = 0;
 shoes.push(Shoe);
 }

   function buyshoe(string memory name, string memory image) public payable {
       require(shoesSold <= 100, "soldout");
       require (price == 0.5 ether, "Incorrect price");
       transferFrom(owner, msg.sender, name, image);
       sold == true;
       shoesSold[msg.sender]++;
   }
   function checkPurchases(uint shoeId) public view returns(bool) {
    address[] storage shoePurchasers = owner[shoeId];
    bool[]storage purchaser;
    for (uint i = 0; i < shoePurchasers.length; i++) {
      if (shoePurchasers [i] == msg.sender) {
        purchaser = true;
      } else {
        purchaser = false;
      }
    }
    return purchaser;
  }
}
