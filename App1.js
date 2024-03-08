import React from "react";
import ReactDOM from "react-dom/client";
 

const Header=()=>{
    return(
        <div ClasName="Header">
            <div className="logo-container">
                <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div class="app">
        <Header/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);
