import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayErrors: false,
            displaySuccess: false,
            name: '',
            email: '',
            message: '',
            _gotcha: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        if (!event.target.checkValidity()) {
            this.setState({
                displaySuccess: false,
                displayErrors: true,
            })
            return
        }

        let data = {
            name: this.state.name,
            message: this.state.message,
            _replyto: this.state.email,
            _gotcha: this.state._gotcha,
        }

        const EMAIL = 'hello@l3digital.co.uk'
        const FORMSPREE_POST_URL = `https://formspree.io/${EMAIL}`

        fetch(FORMSPREE_POST_URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(() => {
                this.setState({
                    displaySuccess: true,
                    displayErrors: false,
                })
                event.target.reset()
                // TODO:: setup success DOM element
            })
            .catch(() => {
                this.setState({
                    displaySuccess: false,
                    displayErrors: true,
                })
            })
    }

    render() {
        const { displayErrors } = this.state
        return (
            <section>
                <form
                    onSubmit={this.handleSubmit}
                    className={displayErrors ? 'displayErrors' : ''}
                    noValidate
                >
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <input
                        type="hidden"
                        name="_gotcha"
                        id="honeypot"
                        onChange={this.handleChange}
                    />
                    <ul className="actions">
                        <li>
                            <input
                                type="submit"
                                value="Send Message"
                                className="special"
                            />
                        </li>
                        <li>
                            <button type="reset" className="effect">
                                Clear
                            </button>
                        </li>
                    </ul>
                </form>
            </section>
        )
    }
}

export default Form
