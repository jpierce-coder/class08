// import user from "../user";

export default class Login {
  // Execute when a login instance gets instantioted
  constructor() { // instance methods is "this", what calls the constructor()
    this.render();
    this.addEventListeners();
  }
  render() {
    // Access App Element
    let appElem = document.getElementById('app')

    appElem.innerHTML += `
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="password-input" class="form-label">Password</label>
    <input type="password" class="form-control" id="password-input">
  </div>
  <button type="button" class="btn btn-primary" id="login-btn">Submit</button>
</form>
    `
  }

  addEventListeners() {
    let loginBtnElem = document.getElementById('login-btn')

    loginBtnElem.addEventListener('click', () => {
      let emailInputElem = document.getElementById('email-input').value;
      let passInputElem = document.getElementById('password-input').value;
      // console.log('CLICK button');

      if(emailInputElem === user.email && passInputElem === user.password) {
        console.log('credentials correct')
      } else {
        console.log('incorrect creds')
      }
    })
  }
}