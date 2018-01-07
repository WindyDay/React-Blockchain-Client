import React, {Component} from 'react';
import './LoginStyle.css';

var inLogin = null;
class Login extends Component {

  /* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

  cambiar_login() {
    inLogin = true;
    // this.status();
    document
      .querySelector('.cont_forms')
      .className = "cont_forms cont_forms_active_login";
    document
      .querySelector('.cont_form_login')
      .style
      .display = "block";
    document
      .querySelector('.cont_form_sign_up')
      .style
      .opacity = "0";

    setTimeout(function () {
      document
        .querySelector('.cont_form_login')
        .style
        .opacity = "1";
    }, 400);

    setTimeout(function () {
      document
        .querySelector('.cont_form_sign_up')
        .style
        .display = "none";
    }, 200);
  }

  cambiar_sign_up(at) {
    console.log("clicked sign up");
    if (inLogin === false) {
      // get data and do ajax
      fetch('https://dry-taiga-41476.herokuapp.com/api/post', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Email: "test2.IcedTea@gmail.com", Password: "123456"})
      })
      .then(function(response) {
        if (response.status >= 400) {
          //throw new Error("Bad response from server");
          console.log("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        console.log(stories);
      })
      .catch((error) => {
        console.log("error");
      });
    }

    inLogin = false;
    // this.status();
    document
      .querySelector('.cont_forms')
      .className = "cont_forms cont_forms_active_sign_up";
    document
      .querySelector('.cont_form_sign_up')
      .style
      .display = "block";
    document
      .querySelector('.cont_form_login')
      .style
      .opacity = "0";

    setTimeout(function () {
      document
        .querySelector('.cont_form_sign_up')
        .style
        .opacity = "1";
    }, 100);

    setTimeout(function () {
      document
        .querySelector('.cont_form_login')
        .style
        .display = "none";
    }, 400);

  }

  ocultar_login_sign_up() {

    inLogin = null;

    // this.status();
    document
      .querySelector('.cont_forms')
      .className = "cont_forms";
    document
      .querySelector('.cont_form_sign_up')
      .style
      .opacity = "0";
    document
      .querySelector('.cont_form_login')
      .style
      .opacity = "0";

    setTimeout(function () {
      document
        .querySelector('.cont_form_sign_up')
        .style
        .display = "none";
      document
        .querySelector('.cont_form_login')
        .style
        .display = "none";
    }, 500);

  }

  status() {
    console.log("inLogin = " + inLogin);
  }

  render() {
    return (

      <div class="cotn_principal" style={{
        position: 'relative'
      }}>
        <div class="cont_centrar">

          <div class="cont_login">
            <div class="cont_info_log_sign_up">
              <div class="col_md_login">
                <div class="cont_ba_opcitiy">

                  <h2>LOGIN</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button class="btn_login" onClick={this.cambiar_login}>LOGIN</button>
                </div>
              </div>
              <div class="col_md_sign_up">
                <div class="cont_ba_opcitiy">
                  <h2>SIGN UP</h2>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                  <button class="btn_sign_up" onClick={this.cambiar_sign_up}>SIGN UP</button>
                </div>
              </div>
            </div>

            <div class="cont_back_info">
              <div class="cont_img_back_grey">
                <img
                  src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                  alt=""/>
              </div>

            </div>
            <div class="cont_forms">
              <div class="cont_img_back_">
                <img
                  src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                  alt=""/>
              </div>
              <div class="cont_form_login">
                <a onClick={this.ocultar_login_sign_up}>
                  <i class="material-icons">&#xE5C4;</i>
                </a>
                <h2>LOGIN</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button class="btn_login" onClick={this.cambiar_login}>LOGIN</button>
              </div>

              <div class="cont_form_sign_up">
                <a onClick={this.ocultar_login_sign_up}>
                  <i class="material-icons">&#xE5C4;</i>
                </a>
                <h2>SIGN UP</h2>
                <input type="email" placeholder="Email"/> {/* <!-- <input type="text" placeholder="User" /> --> */}
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button class="btn_sign_up" onClick={this.cambiar_sign_up}>SIGN UP</button>

              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Login;
