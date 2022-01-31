import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Yr lomo tbh venmo typewriter edison bulb keytar cred. Artisan
              scenester post-ironic migas, jean shorts af echo park.
            </p>
            <p>YOLO helvetica 90's plaid tumblr seitan la croix.</p>
            <p>
              Cornhole keffiyeh fashion axe, 3 wolf moon cold-pressed edison
              bulb meh paleo polaroid pop-up asymmetrical chartreuse poutine.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
