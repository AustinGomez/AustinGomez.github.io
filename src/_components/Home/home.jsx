import React, { Component } from 'react'
import Modal from 'react-modal'
import Prismic from 'prismic-javascript'
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga'

import './home.css'

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root')

ReactGA.initialize('UA-128252203-1', {
    debug: process.env.NODE_ENV === 'development'
});

if (process.env.NODE_ENV !== 'development') {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            isModalOpen: false,
            isFormSubmitted: false,
            name: '',
            email: '',
            message: '',
            portFolioItems: null
        }
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onContactSubmit = (event) => {
        event.preventDefault();
        fetch('https://us-central1-site-220117.cloudfunctions.net/contactMe', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                'name': this.state.name,
                'email': this.state.email,
                'message': this.state.message
            })
        }).then(() => {
            this.setState({ isFormSubmitted: true })
        })
    }

    componentDidMount() {
        const apiEndpoint = 'https://austingomez.prismic.io/api/v2';
        Prismic.api(apiEndpoint).then(api => {
            return api.query("").then(response => {
                if (response) {
                    console.log(response.results.filter(x => x.type === "portfolio_item"))
                    this.setState({
                        portfolioItems: response.results.filter(x => x.type === "portfolio_item")
                    })
                }
            })
        })
    }

    render() {
        const { portfolioItems } = this.state
        const items =
            portfolioItems && portfolioItems.map((item, index) => {
                return (
                    <img alt={item.data && item.data.title} className="portfolio-card" key={index} src={item.data && item.data.main_image.url}></img>
                )
            })
        return (
            <div className="home" >
                <div className="container header-container">
                    <div className="header grid-container">
                        <img id="icon" alt="Austin's avatar" src={require('../../_images/avatar-min.png')} className="flex-item"></img>
                        <div className="header-text">
                            <h1>Hi, I'm Austin</h1>
                            <p>I'm a web developer and designer passionate for building beautiful user interfaces.</p>
                        </div>
                    </div>
                </div>
                <div className="contact-me grid-container container green-background">
                    <div className="content-container">
                        <h1>Let's work together</h1>
                        <p className="mobile-contact-text">I have years of experience developing stunning, easy to use websites and I want to help you do the same.
            </p>
                        <hr className="partial-hr" />
                        <p id="mobile-contact-text">Need a stand-out website for your business? Have a cool web project you want to work on? Contact me for a free
                consultation.</p>
                        <button className="contact-button flex-item" onClick={this.toggleModal}>Contact Me</button>
                    </div>
                </div>
                <Fade>
                    <div className="container text-center companies-container">
                        <h2>Some companies I've worked at</h2>
                        <div className="companies grid-container">
                            <a href="https://www.freshii.com"><img alt="Toronto Blue Jays logo" className="logo" src={require('../../_images/freshii_logo.png')}></img></a>
                            <a href="https://www.mlb.com/bluejays"><img alt="Freshii logo" className="logo" src={require('../../_images/bluejays_logo.png')}></img></a>
                        </div>
                    </div>
                </Fade>

                <hr className="partial-hr" />

                <div className="container text-center">
                    <h2>Mock Porfolio</h2>
                    <p>Here are a few recent designs I've worked on for mock business' websites.</p>
                </div>
                <Fade>
                    <div className="portfolio grid-container container">
                        {items}
                    </div>
                </Fade>


                <hr className="partial-hr" />
                {/* <Fade> */}
                <div className="container section text-center contact-bottom">
                    <h2>Want to work together?</h2>
                    <p>I'm always open to new projects. Get in touch!</p>
                    <button className="contact-button flex-item" onClick={this.toggleModal}>Contact Me</button>
                </div>
                {/* </Fade> */}
                <div className="footer container green-background text-center">
                    <div>Austin Gomez</div>
                    <div >hello@austingomez.me</div>
                    <a className="fab fa-github fa-2x" href="https://www.github.com/austingomez" rel="noopener noreferrer" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/austin-gomez" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin fa-2x"></a>
                    <br />
                    <div className="copyright-text">&copy; Austin Gomez 2018</div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    style={customModalStyles}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick
                    contentLabel="Example Modal"
                >
                    <button type="button" className="close" onClick={this.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal" id="contact-modal">
                        {!this.state.isFormSubmitted ? <div>
                            <h2>Contact Me</h2>
                            <form id="contact-form" onSubmit={this.onContactSubmit}>
                                <label for="name">Name</label>
                                <input value={this.state.name} onChange={this.handleChange} type="text" required name="name" />

                                <label for="email">Email</label>
                                <input value={this.state.email} onChange={this.handleChange} type="email" required name="email" />

                                <label for="message">Message</label>
                                <textarea value={this.state.message} onChange={this.handleChange} form="contact-form" name="message" type="text" rows="4" cols="50"></textarea>
                                <button type="submit" id="message-button">Send</button>
                            </form>
                        </div>
                            :

                            <div className="modal">
                                <p>Thanks for reaching out! I'll get back to you soon.</p>
                            </div>}
                    </div>
                </Modal>

            </div>
        )
    }
}
