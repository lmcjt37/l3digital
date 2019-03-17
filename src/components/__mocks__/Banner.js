// __mocks__/components/Banner.js
'use strict'
import PropTypes from 'prop-types'

const Mock = props => (
    <section className={props.classes}>{props.children}</section>
)

Mock.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    classes: PropTypes.string,
}

export default Mock
