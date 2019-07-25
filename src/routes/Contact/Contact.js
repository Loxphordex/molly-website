import React from 'react'

export default class Contact extends React.Component {
  render() {
    return(
      <section className='contact-wrapper'>
        <div className='contact-info'>
          <p>Comments? Questions? Direct them to:</p>
          <a href='mailto:reusser95@gmail.com'>reusser95@gmail.com</a>
        </div>
      </section>
    )
  }
}