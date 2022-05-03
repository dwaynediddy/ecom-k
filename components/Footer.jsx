import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
        <p>© 2022 Kepac straya All Rights Reserved</p>
        <p className="icons">
          <a target='_blank' href='https://www.instagram.com/kepac.coffee/' rel="noopener noreferrer">
            <AiFillInstagram  />
          </a>
          <a target='_blank' href='https://www.instagram.com/kepac.coffee/' rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
          <a target='_blank' href='https://www.instagram.com/kepac.coffee/' rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
        </p>
    </div>
  )
}

export default Footer