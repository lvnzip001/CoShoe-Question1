// import the contract artifact
const ExampleCoin = artifacts.require('./CoShoe.sol')
                                                
//Predefined contract instance
contract("CoShoe", function(accounts){
    let CoShoeInstance

    beforeEach (async function (){
        CoShoeInstance = await CoShoe.new()
    })
    //first test
    it (" Should mint a 100 tokens on deployment", async function (){
        for (let i = 100; i ; i--) {
            // get the TokenBalances of this account
            let TokenBalances = await CoShoeInstance.TokenBalances(accounts[i])
            // check that the TokenBalances is 100
            assert.equal(TokenBalances.toNumber(), 100, "100 wasn't in account" + i.toString())
    })

    // second test
  it('should transfer ownership of 5 tokens from account 0 to account 1', async function () {
       // buyshoe 5 tokens from account 0 to account 1
    await CoShoeInstance.buyshoe(accounts[1], 5, { 'from': accounts[0] })
    // retrieve the TokenBalances of account 0 and account 1
    let TokenBalance0 = await CoShoeInstance.TokenBalances(accounts[0])
    let TokenBalance1 = await CoShoeInstance.TokenBalances(accounts[1])
    // check that both TokenBalances are equal to 5
    assert.equal(TokenBalances.toNumber(), 5, "5 wasn't in account 0")
    assert.equal(TokenBalance1.toNumber(), 5, "5 wasn't in account 1")
   
    //third test
    it('should not transfer ownership of tokens if price is not 0.5 ether')
    //try to buy 1 tokens using ether less than 0.5
    await truffleAssert.reverts(CoShoeInstance.buyshoe(accounts[1],1,price <0.5, {'from': accounts[1]}))
    // fetch the TokenBalance of account 1
    let TokenBalance = await CoShoeInstance.TokenBalances(accounts[1])
    // check that the balance of account 1 is still 0
    assert.equal(TokenBalances.toNumber(), 0, "0 wasn't in account 1")

    //forth test
    it('should checkPurchases returns the correct number of trues, for each shoe bought')
    //try to from 2 accounts to check number of trues
    await CoShoeInstance.buyshoe(accounts[1], 1, { 'from': accounts[0] })
    await CoShoeInstance.buyshoe(accounts[2], 1, { 'from': accounts[0] })
    // retrieve the checkpurchases of account 1 and account 2
    let checkPurchases1 = await CoShoeInstance.checkPurchases(accounts[1])
    let checkPurchases2 = await CoShoeInstance.checkPurchases(accounts[2])
    // check that both TokenBalances are equal to true
    assert.equal(TokenBalances.tobool(), true, "false")
    assert.equal(TokenBalance1.tobool(), true, "false")
  })
})

// Code reference from Examplecoin and SongRegistry example