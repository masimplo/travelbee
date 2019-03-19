import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} width="60" height="60" alt="logo"/>
            {/* <span className="icon fa-suitcase"></span> */}
        </div>
        <div className="content">
            <div className="inner">
                <h1>travelbee</h1>
                <p>The Travel & Tourism Specialists</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li> */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
