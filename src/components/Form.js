import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayErrors: false,
            displaySuccess: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const data = new FormData(form)

        // if (!event.target.checkValidity()) {
        //     this.setState({ displayErrors: true });
        //     return;
        // }
        // this.setState({ displayErrors: false });

        for (let name of data.keys()) {
            data.set(name, form.elements[name])
        }

        console.log('data ---> ', data)

        // fetch('https://formspree.io/hello@l3digital.co.uk', {
        //     method: 'POST',
        //     body: data,
        // });
    }

    render() {
        const { displayErrors } = this.state
        return (
            <form
                onSubmit={this.handleSubmit}
                className={displayErrors ? 'displayErrors' : ''}
                noValidate
            >
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
                    <textarea name="message" id="message" rows="6" required />
                </div>
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
        )
    }
}

export default Form
