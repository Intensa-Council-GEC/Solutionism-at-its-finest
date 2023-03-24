import React from 'react'
import Layout from '../components/layout'

import styles from '../components/layout.module.css'

export default function query() {
    return (
      <Layout>
        <form className={styles.queryForm} action="/jobs2">

          <input placeholder='query' name="query" className={styles.query} type="text"></input>
          <br/>
          {/* <select>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
          </select><br/> */}
        <button type='submit'>Submit</button>
        </form>
      </Layout>
    )
  }