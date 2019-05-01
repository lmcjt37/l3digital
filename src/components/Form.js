import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayErrors: false,
            name: '',
            email: '',
            message: '',
            _gotcha: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmission = (event, type) => {
        let target = event.target.querySelector('.special')
        target.value = `${type}`
        target.classList.add(type)

        setTimeout(() => {
            target.classList.remove(type)
            target.value = 'Send Message'
        }, 4000)
    }

    handleSubmit = event => {
        event.preventDefault()
        event.persist() // https://fb.me/react-event-pooling

        if (!event.target.checkValidity()) {
            this.setState({
                displayErrors: true,
            })
            return
        }

        fetch('/api/mailer', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                _gotcha: this.state._gotcha,
            }),
        })
            .then(response => {
                this.setState({
                    displayErrors: false,
                })

                if (response.status === 200) {
                    this.handleSubmission(event, 'success')
                    event.target.reset()
                } else {
                    this.handleSubmission(event, 'error')
                }
            })
            .catch(() => {
                this.setState({
                    displayErrors: true,
                })

                this.handleSubmission(event, 'error')
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
