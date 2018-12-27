import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'

import styles from './navigation.module.css'

const propTypes = {
  activeView: string.isRequired,
}

const Navigation = ({ activeView }) => (
  <div className={styles}>
    <ul>
      <li>
        <Link to="/">Nav1!</Link>
      </li>
      <li>
        <Link to="/">Nav2!</Link>
      </li>
      <li>
        <Link to="/">Nav3!</Link>
      </li>
    </ul>
  </div>
)

Navigation.propTypes = propTypes
export default Navigation
