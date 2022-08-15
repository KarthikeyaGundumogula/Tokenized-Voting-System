import Web3Modal from "web3modal";
import {ethers} from "ethers";
const ADDRESS=process.env.REACT_APP_VOTE_ADDRESS  
const ABI=process.env.REACT_APP_VOTE_ABI
function App() {
  async function connect(){
    try{
      let web3Modal=new Web3Modal()
      const web3ModalInstance=await web3Modal.connect()
      const web3ModalProvider=new ethers.providers.Web3Provider(web3ModalInstance);
      const signer=web3ModalProvider.getSigner()
      const add=await signer.getAddress()
      let balance=await signer.getBalance()
      balance=ethers.utils.formatEther(balance)
      document.getElementById("div").innerHTML=`<div><h5>address: ${add}</h5> <h5>balance: ${Number(balance)}</h5></div>`
      return signer;
    }catch(e){
      console.log(e)
  }
}
  async function mint_Token(){
    try{
      const signer=await connect()
      const token=new ethers.Contract(ADDRESS,ABI,signer)
      await token.grantVote()     
      let amount=await token.balanceOf(signer.getAddress())
      amount=ethers.utils.formatEther(amount)
      document.getElementById("mint").innerHTML=`<div>
      <h5>your Vote Id:${await token.name()}</h5>
      </div>`
    }catch(e){
      try{
        const signer=await connect()
        const token=new ethers.Contract(ADDRESS,ABI,signer)
        document.getElementById("mint").innerHTML=`<div>you are already registered
        <h5>your Vote Id:${await token.name()}</h5>
        </div>`
      }catch(e){
        document.getElementById("mint").innerHTML=`<div><h5>Error Occured</h5></div>`
      }
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
        <button onClick={connect}>Connect</button><br></br>
        <div id="div"></div>
        <button onClick={mint_Token}>GetVote</button>
        <div id="mint"></div>
      </header>
    </div>
  );
  }
export default App;
