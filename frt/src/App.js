import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {

    function getNearest(){

        // below valuing is just simulating the process
        document.getElementById("resultpannel").innerHTML = "<b>Name:345 WILLIAMS AVE(San Francisco Taco Truck)</b>";

        // this section below is basically the process of what I will do  in next step;
        const HTTP_CODE_SUCCESS = 200;
        const coord = "32.123~-121.22";//mock the local coordinate instead of retriving from function of getCoordinate for DEMO
        const param = new FormData();
        param.set("coord", coord);
        const url = "http://127.0.0.1:5000/api/getneareast";//just mark a unexist address to illustrate the process.

        /*

        axios.post(url,param).then(res=>{
            if(res&&res.status==HTTP_CODE_SUCCESS){
                // try to render the store  in google map
            }else{
                console.error("bad connection ", error);
            }
        })
       */
    }
    return (
        <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
                <p>
                    Click to get the nearest store around you
                </p>
                <button className="button" onClick={getNearest}>
                    Click
                </button>
            </header>

            <body className="App">
            <p>The nearest store around you showed below:</p>
            <div id={"resultpannel"}></div>
            </body>

        </div>

    );

}

export default App;
