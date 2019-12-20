import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div id="container">
      <header id="siteHeader">
      <h1>
      <a href="/">Ginger Whale</a>
      </h1>
      <nav id="mainMenu">
          <ul>
            <li><a href="/about" class="about">About</a></li>
            <li><a href="/support" class="support">Support</a></li>
            <li><a href="/privacy" class="support">Privacy</a></li>
            <li><a href="/featured-stories" class="stories">Stories</a></li>
          </ul>
        </nav>
        </header>
        <div id="main" role="main" >
        <div id="page">
        <div id="whale" ></div>
        <div id="gingerWhale" class="name">Ginger Whale</div>
        {/* <div class="bubbles" ></div>
        <section class="bubble text">
          <header>
            <h2> Ginger Whale interactive stories</h2>
          
          <p>

   " Teaching children to read is one of the greatest gifts a parent can give. Ginger Whale stories nurture exploration and imagination,
    by allowing young readers to interact and shape each story. Making it fun for children to learn to read."
  
          </p>
          </header>
        </section> */}
        <div id="middlepage" class="name">
        <div id="diver">

        </div>

        </div>
        <div id="middlepage2" class="name">
          <div id="bottle">
          </div>
        </div>
        <div id="middlepage3" class="name">
          <div id="treasure">

          </div>
         
          <div id="background1"></div>
        <div id="background2"></div>
        <div id="castle"></div>
        </div>
        <div class="corner_left"></div>
        <div class="corner_right"></div>
        <div class="left_light"></div>
        <div class="right_light"></div>
        <div class="leaf"></div>
       
        </div>
        </div>
    </div>
  );
}

export default App;
