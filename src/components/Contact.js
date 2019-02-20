import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Contact = ({ data }) => {
    const companyData = data.allContentfulCompany.edges[0].node
    return (
        <section id="contact">
            <div className="inner">
                <section>
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6" />
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
                                <input type="reset" value="Clear" />
                            </li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope" />
                            <h3>Email</h3>
                            <a href={'mailto:' + companyData.email}>
                                {companyData.email}
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone" />
                            <h3>Phone</h3>
                            <a href={'tel:' + companyData.telephone1}>
                                {companyData.telephone1}
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home" />
                            <h3>Address</h3>
                            <span>
                                {companyData.address.line1}
                                <br />
                                {companyData.address.line2}
                                <br />
                                {companyData.address.county}
                                <br />
                                {companyData.address.country}
                                <br />
                                {companyData.address.postcode}
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
            {
                allContentfulCompany(limit: 1) {
                    edges {
                        node {
                            email
                            telephone1
                            address {
                                line1
                                line2
                                county
                                country
                                postcode
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Contact data={data} {...props} />}
    />
)

Contact.propTypes = {
    data: PropTypes.shape({
        line1: PropTypes.string,
        line2: PropTypes.string,
        county: PropTypes.string,
        country: PropTypes.string,
        postcode: PropTypes.object,
    }).isRequired,
}
