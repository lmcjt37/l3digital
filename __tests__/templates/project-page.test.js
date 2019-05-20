import { graphql, StaticQuery } from 'gatsby'

import ProjectPage from 'templates/project-page'
import ProjectPageMock from '__mocks__/templates/project-page.mock'
import SEOMock from '__mocks__/components/SEO.mock'

beforeEach(() => {
    graphql.mockImplementation(() => ProjectPageMock)
    // Mock SEO component to prevent Invariant errors
    StaticQuery.mockImplementationOnce(({ render }) => render(SEOMock))
})

describe('Project Page template tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<ProjectPage {...ProjectPageMock} />)
        expect(tree).toMatchSnapshot()
    })
})
