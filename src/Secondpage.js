import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";

import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";


function Secondpage() {

  
  const [geta,setgeta] = useState("");

  
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
            
     alert("completed");    

    //var getaaa=new web3.eth.Contract(abi,poda);
    
    //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});


      //var printgeta=await getaaa.methods.tokenURI(te).call();

      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Second Page</h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >




</form>



      
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

export default Secondpage;
