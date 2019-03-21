import React from 'react'
import PropTypes from 'prop-types'

import NetlifyForm from 'react-netlify-form'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <NetlifyForm
            name='Contact Form'
            recaptcha={{
              sitekey: RECAPTCHA_KEY,
              size: 'normal'
            }}>
            {({ loading, error, recaptchaError, success, recaptcha }) => (
              <div>
                {loading &&
                  <div>Loading...</div>
                }
                {error &&
                  <div style={{color: 'red', paddingBottom: '20px', textAlign: 'center'}}>Your information was not sent. Please try again later.</div>
                }
                {recaptchaError &&
                  <div style={{color: 'red', paddingBottom: '20px', textAlign: 'center'}}>Recaptcha did not match. Please make sure the box is checked.</div>
                }
                {success &&
                  <div>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                  <div>
                    <div className="field half first">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" required />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" required />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="4" required></textarea>
                    </div>
                    {recaptcha}
                    <button>Send message</button>
                  </div>
                }
              </div>
            )}
          </NetlifyForm>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main