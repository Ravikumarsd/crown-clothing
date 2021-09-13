import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import DotsLoading from '../DotsLoading/DotsLoading'

const Header = ({ currentUser, loading }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        loading ? (
          <DotsLoading />
        ) : (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )
      ) : loading ? (
        <DotsLoading />
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

const mapStateToProps = state => {
  console.log('state ===>>', state)
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading
  }
}

export default connect(mapStateToProps)(Header)
