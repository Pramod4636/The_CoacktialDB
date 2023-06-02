import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section calssName = "error-page section">
      <div className ="error-container">
        <h2>Opps! its A Dead End </h2>
        <Link to="/" className = "btn">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default Error
