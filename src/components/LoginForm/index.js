import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoginSuccess: true,
    usernameMatch: true,
    passwordMatch: true,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    console.log('home')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username.length === 0) {
      this.setState({usernameMatch: false})
    }

    if (password.length === 0) {
      this.setState({passwordMatch: false})
    }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.setState({isLoginSuccess: true})
      this.onSubmitSuccess()
    } else {
      this.setState({isLoginSuccess: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username, usernameMatch, passwordMatch} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {usernameMatch, passwordMatch, isLoginSuccess} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {!usernameMatch && <p>*Enter Valid Username</p>}
          {!passwordMatch && <p>*Enter Valid Password</p>}
          {!isLoginSuccess && <p>*Username and Password didn't match</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
