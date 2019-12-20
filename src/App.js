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
        <label htmlFor="bubble-text-visibility" id="whale" ></label>
        <label htmlFor="bubble-text-visibility" id="gingerWhale" class="name">Ginger Whale</label>
        <input type="checkbox" id="bubble-text-visibility"></input>
        <section class="bubble-text">
        <div class="bubbles" ></div>
          <header>
            <h2> Ginger Whale interactive stories</h2>
          
          <p>

   " Teaching children to read is one of the greatest gifts a parent can give. Ginger Whale stories nurture exploration and imagination,
    by allowing young readers to interact and shape each story. Making it fun for children to learn to read."
  
          </p>
          </header>
          <footer>
            <div htmlFor="bubble-text-visibility" id="closebutton ir"></div>
          </footer>
        </section>
        <div id="middlepage" class="name">
        <div id="diver">
          <section class="bubble-text">
            <div class="bubbles"></div>
            <header>
              <h2>support</h2>
              <dl>
    <dt>App support:</dt>
    <dd><a href="mailto:support@gingerwhale.com" class="noPush">support@gingerwhale.com</a></dd>
    <dt>Media &amp; general enquiries:</dt>
    <dd><a href="mailto:info@gingerwhale.com" class="noPush">info@gingerwhale.com</a></dd>
    <dt>Creative:</dt>
    <dd><a href="mailto:james@gingerwhale.com" class="noPush">james@gingerwhale.com</a></dd>
  </dl>
            </header>
            <footer>
            <div htmlFor="bubble-text-visibility" id="closebutton ir"></div>
          </footer>
          </section>

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
        <footer id="site-footer">
          <p>website built by experience bureau</p>
        </footer>
    </div>
  );
}

export default App;
