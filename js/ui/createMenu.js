import { getUsername } from "../utils/localStorage.js";
import { logoutButton } from "./logoutButton.js";
import { displayCartNumber } from "./displayCartNumber.js";

export default function createMenu() {
    const container = document.querySelector(".menu-container"); 
    const { pathname } = document.location; 
    const username = getUsername();

    if(username) { 
        container.innerHTML =  `<nav class="menu">
                                    <div class="menu-container"> 
                                        <div> 
                                            <a href="/" class="logo">Sneakers</a>
                                            <i class="fas fa-circle"></i>
                                        </div>        
                                        <ul>
                                            <li><a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Edit</a></li> 
                                            <li><a href="add-product.html" class="${pathname === "/add-product.html" ? "active" : ""}">Add</a></li>  
                                            <li><a href="cart.html" class="${pathname === "/cart.html" ? "active" : ""}" aria-label="view items in cart"><i class="fas fa-shopping-bag" aria-hidden="true"><span class="cart-count">0</span></i></a></li>                                  
                                        </ul>
                                    </div>
                                    <div class="menu-logout-button-container">
                                        <button id="logoutButton" class="btn-logout">Logout, ${username}</button>
                                    </div>
                                </nav>`;
    };

    if(!username) {
        container.innerHTML =   `<nav class="menu">
                                    <div class="menu-container"> 
                                        <div> 
                                            <a href="/" class="logo">Sneakers</a>
                                            <i class="fas fa-circle"></i>
                                        </div>        
                                        <ul>
                                            <li><a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Shoes</a></li> 
                                            <li><a href="about.html" class="${pathname === "/about.html" ? "active" : ""}">About</a></li> 
                                            <li><li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}" aria-label="admin login"><i class="fas fa-user" aria-hidden="true"></i></a></li></li>     
                                            <li><a href="cart.html" class="${pathname === "/cart.html" ? "active" : ""}" aria-label="view items in cart"><i class="fas fa-shopping-bag" aria-hidden="true"><span class="cart-count">0</span></i></a></li>                                   
                                        </ul>
                                    </div>
                                </nav>`;
    };
                   
    logoutButton();         
    displayCartNumber();
}; 