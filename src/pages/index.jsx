import React from 'react'
import { Link } from 'gatsby'
import helloPhoto from '../images/hellothere.png'

import Layout from '../components/layout'
import './index.css'

// TODO: Ideally this would use the array spread operator:
// [...Array(10).keys()]
// But Gatsby's webpack settings are barfing on it
const blocks = Array.from(Array(10).keys())
const newBlocks = [...blocks, ...blocks, ...blocks]

const IndexPage = () => (
  <Layout>
    <div className="block-container">
      {newBlocks.map(block => (
        <div key={block} className={`block color-${block}`} />
      ))}
    </div>
    <h1>Andrew Beers</h1>
    <p>JavaScript developer, fruity coffee lover, mushroom hater.</p>
    {/* <img src={helloPhoto} alt="Andrew Smiling" /> */}
    <Link to="/page-2/">mystery link</Link>
  </Layout>
)

export default IndexPage
