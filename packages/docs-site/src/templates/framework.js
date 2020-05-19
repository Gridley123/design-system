import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Badge } from '@royalnavy/react-component-library'

import favicon16 from '../library/images/favicons/favicon-16x16.png'
import favicon32 from '../library/images/favicons/favicon-32x32.png'
import favicon96 from '../library/images/favicons/favicon-96x96.png'


export const pageQuery = graphql`
  query FrameworkPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      body
    }
  }
`

const FrameworkPageTemplate = ({ data: { mdx }, location }) => {

  const [menuToggle, setMenuToggle] = useState(false)


  return (
    <section className="rn-fw">
      <Helmet
        title={`${mdx.frontmatter.title} | Royal Navy Design System`}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${favicon32}`,
          },
          {
            rel: 'shortcut icon',
            type: 'image/png',
            href: `${favicon96}`,
          },
        ]}
      />
      <div className="rn-fw-bar">
        <div className="rn-fw-bar-ds">
          <Badge color="action" colorVariant="solid">v2.7.0</Badge>
          <span className="rn-fw-bar-title rn_ml-4">Royal Navy Design System</span>
        </div>
        <button className="rn-fw-sidebar-toggle" onClick={() => setMenuToggle(!menuToggle)}>Click me</button>
      </div>
      <div className={menuToggle ? 'rn-fw-sidebar-frame is-open' : 'rn-fw-sidebar-frame'}>
        <h1>Sidebar</h1>
      </div>
      <div className="rn-fw-content">
        <div className="rn-fw-row">
          <div className="rn-fw-copy rn-fw-hero">
            <Badge color="action" colorVariant="solid">Framework</Badge>
            <h1 className="rn-fw-page-title">{mdx.frontmatter.title}</h1>
            <p className="rn-fw-page-lede">{mdx.frontmatter.description}</p>
          </div>
        </div>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </section>
  )
}

FrameworkPageTemplate.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
}

export default FrameworkPageTemplate
