import React from 'react'
// import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
      <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header"><a class="navbar-brand navbar-link">My wallet</a>
                <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
            </div>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li role="presentation"><a href="index.html">Transactions </a></li>
                    <li role="presentation">
                        <a href="myProduct.html"> </a>
                    </li>
                </ul><a class="btn btn-info btn-sm navbar-btn navbar-right" role="button" href="registrationlogin_form.html">Sign in</a><a class="btn btn-default btn-sm navbar-btn navbar-right" role="button" href="registrationlogin_form.html">Sign up</a></div>
        </div>
    </nav>
    {/* <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav> */}
  </header>
)

export default Header
