const {ethers} = require("hardhat");

async function interaction() {
    const {signer} = await ethers.getSigners();
  
    const storeManagementContractAddress = "0x123C88c112b410C827c6Da7477Ab4CE73F66585D";

    const storeManagementContract = await ethers.getContractAt("IStoreManagement", storeManagementContractAddress);

    // const name = "Bag";
    // const Qty = 20;
    // const price = 1000;

    // const tx = await storeManagementContract.addNewProduct(name, Qty, price);
    // tx.wait();


    // console.log(tx);

    const products = await storeManagementContract.getAllProducts();

    console.log(products);

    // const newQty = await storeManagementContract.updateStockLevel(4, 5);

    // console.log(newQty);

    // const stockLevel = await storeManagementContract.retrieveStockLevel(4);

    // console.log(stockLevel);

    // const removeProduct = await storeManagementContract.removeProduct(3);

    // console.log(removeProduct);
 
  }

  interaction();
  
