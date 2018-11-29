import React, { Component } from 'react';
import { render } from "react-dom";


class Header extends Component {
  render() {
      /*this code contains the pure header and then bleh, 
      which is all the parallax styled cropped images */
    return(

    <div>
      <header className="App-header">
        
        <nav class="navbar navbar-expand-lg navbar-dark" >

          <img class="navbar-brand" href="#" height= "100px" src="../Images/logo_black_bkgd.png"></img>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
             <li class="nav-item">
                <a class="nav-link" href="/Resources">Resources and stuff</a>
              </li>
              <li class="nav-item">
               <a class="nav-link" href="#">Get Involved</a>
              </li>
             <li class="nav-item">
                <a class="nav-link" href="#">Founder Bios</a>
             </li>
              <li class="nav-item">
               <a class="nav-link" href="#">Contact Us</a>
             </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>   
         </div>
        </nav>
        </header>
        </div>
   );
  }
}
export default Header;