import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Badge } from '@royalnavy/react-component-library'
import { IconChevronLeft } from '@royalnavy/icon-library'

import packageJson from '../../package'

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
        <button className="rn-fw-sidebar-toggle rn-fw-sidebar-open" onClick={() => setMenuToggle(!menuToggle)}>Menu</button>
        <div className="rn-fw-bar-ds">
          <Badge color="action">v{packageJson.version}</Badge>
          <span className="rn-fw-bar-title rn_ml-4">Royal Navy Design System</span>
        </div>
      </div>
      <div className={menuToggle ? 'rn-fw-sidebar-frame is-open' : 'rn-fw-sidebar-frame'}>
        <div className="rn-fw-sidebar">
          <div className="rn-fw-sidebar-fixed">
            <a href="/" className="rn-fw-sidebar-home-link">
              <IconChevronLeft />
              Back to docs
            </a>
            <div className="rn-fw-sidebar-header">
              <Badge color="action" colorVariant="solid" size="small">Framework</Badge>
              <h1 className="rn-fw-sidebar-title">Compound Timeline</h1>
            </div>
            <button className="rn-fw-sidebar-toggle rn-fw-sidebar-close" onClick={() => setMenuToggle(!menuToggle)}>Close</button>
          </div>
          <nav className="rn-fw-sidebar-nav rn-fw-sidebar-scroll">

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Introduction</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Motivation</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Installation</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Options</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Example Usage</a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Documentation</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Compound Components &amp; Composition</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link is-active" href="#foo">
                    Custom Component Presentation
                    <span className="rn-fw-sidebar-nav-link-child">Render Props</span>
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Context Provider</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">State &amp; Action Dispatcher</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">
                    Hooks
                    <span className="rn-fw-sidebar-nav-link-child">useTimelinePosition</span>
                  </a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Advanced Custom Layouts</a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">Component APIs</h4>
              <ul className="rn-fw-sidebar-nav-list is-code">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Timeline</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link is-active" href="#foo">TimelineTodayMarker</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineSide</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineMonths</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineWeeks</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineDays</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineRows</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineRow</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineEvents</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">TimelineEvent</a>
                </li>
              </ul>
            </section>

            <section className="rn-fw-sidebar-nav-section">
              <h4 className="rn-fw-sidebar-nav-section-title">More Info</h4>
              <ul className="rn-fw-sidebar-nav-list">
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Roadmap</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Contributing</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">Changelog</a>
                </li>
                <li className="rn-fw-sidebar-nav-list-item">
                  <a className="rn-fw-sidebar-nav-link" href="#foo">License</a>
                </li>
              </ul>
            </section>


          </nav>
        </div>
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
