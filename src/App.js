import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser, setLoader } from './redux/user-actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount () {
    const { setCurrentUser, setLoader } = this.props
    setLoader(true)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        setLoader(false)
      }
      setCurrentUser(userAuth)
      setLoader(false)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin'>
            {currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
          </Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setLoader: loading => dispatch(setLoader(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
