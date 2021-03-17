import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import './App.css';
import lottery from './bdo';
import oracle from './Oracle';
import { Router, Route, Switch } from "react-router-dom";
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";

import Treasury from './Treasury';

function Moa(){
  
  const [balance,setbalance] = useState("");
  const [totalsupply,settotalsupply] = useState("");
  const [circulatingsupply,setcirculatingsupply] = useState("");
  const [price,setprice] = useState("");

  const [epochs,setepoch] = useState("");

  const [nextseigniorage,setnextseigniorage] = useState("");




  const onSubmitNFT = async (event) => {



    event.preventDefault();
  
    const accounts = await  web3.eth.getAccounts();


   

    setbalance(await lottery.methods.balanceOf(accounts[0]).call());
    settotalsupply(await lottery.methods.totalSupply().call());
    setprice( await oracle.methods.getDollarPrice().call());
    //setprice( await oracle.methods.getDollarPrice().call());

    setepoch(await Treasury.methods.epoch().call());
    setnextseigniorage(await Treasury.methods.nextEpochPoint().call());

    alert(balance);
    alert(totalsupply);
    alert(circulatingsupply);
    alert(epochs);
    alert(nextseigniorage);


    //await lottery.methods.balanceOf(accounts[0]).send({
      //from: accounts[0]
      //value: this.setState({c:accounts[0]})
      
      //});
    //setState({totalsupply,price,balance});    
    //var te=tid;

    
          
   alert("completed");    

  //var getaaa=new web3.eth.Contract(abi,poda);
  
  


    //var printgeta=await getaaa.methods.tokenURI(te).call();

    
};
   
return (
    <div className="App">
      
<center>
<br></br>
<h1>Moa Page</h1>

<div>

	<form onSubmit={onSubmitNFT} id="create-course-form" >



  
    <button
                class="btn btn-info btn-block"
                type="submit">
                
                Submit
              </button>




</form>

</div>


<h2>Bdollar Contract</h2>
        <p>
           total supply <br/> {totalsupply}
        </p>
        <p>
          price<br/> {price}
      </p>
        <p>
          balanceOf<br/> {balance}
         </p>

         <p>
          epoch<br/> {epochs}
         </p>

         <p>
         nextEpochPoint<br/> {nextseigniorage}
         </p>


        <hr />









      
<br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Firstpage");
                }}>
                Firstpage
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Thirdpage");
                }}
              >
                Third page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fourthpage");
                }}
              >
                Fourth page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fifthpage");
                }}
              >
                Fifthpage
              </button>


              <br></br>
<br></br>


              
</center>

<br></br>
<br></br>
                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/Firstpage">
              <Firstpage />
            </Route>
            <Route path="/Thirdpage">
              <Thirdpage />
              <Route path="/Fourthpage">
              <Fourthpage />
            </Route>
            <Route path="/Fifthpage">
              <Fifthpage />
            </Route>
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default Moa;
