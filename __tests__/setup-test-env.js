import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

// this is basically: afterEach(cleanup)
import 'react-testing-library/cleanup-after-each'

global.React = React
global.render = render
