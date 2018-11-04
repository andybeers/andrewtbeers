import React from 'react'
import { Link } from 'gatsby'
import helloPhoto from '../images/hellothere.png'

import Layout from '../components/layout'
import './index.css'

const blocks = Array(10).fill()

const IndexPage = () => (
  <Layout>
    <div className="block-container">
      {blocks.map((block, idx) => (
        /* eslint-disable-next-line */
        <div key={idx} className={`block color-${idx}`} />
      ))}
    </div>
    <h1>Andrew Beers</h1>
    <p>JavaScript developer, fruity coffee lover, mushroom hater.</p>
    {/* <img src={helloPhoto} alt="Andrew Smiling" /> */}
    <Link to="/page-2/">mystery link</Link>
  </Layout>
)

export default IndexPage
