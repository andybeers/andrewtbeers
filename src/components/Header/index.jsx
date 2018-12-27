import React, { Fragment } from 'react'

import './header.css'

// TODO: Ideally this would use the array spread operator:
// [...Array(10).keys()]
// But Gatsby's webpack settings are barfing on it
const blocks = Array.from(Array(10).keys())
const shortBlocks = blocks.slice(0, 2)
const longBlocks = blocks.slice(2)
const allBlocks = [...longBlocks, ...blocks, ...blocks]

const Header = () => (
  <Fragment>
    <div className="block-container">
      {shortBlocks.map(block => (
        <div key={block} className={`block color-${block}`} />
      ))}
      <h2 className="header-name">ANDREW BEERS</h2>
      {allBlocks.map((block, idx) => (
        /* eslint-disable-next-line */
        <div key={idx} className={`block color-${block}`} />
      ))}
    </div>
    <hr className="header-divider" />
  </Fragment>
)

export default Header
