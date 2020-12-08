import React from "react";
import Layout from "../components/layout";

function Contact() {
  return (
    <Layout>
      <h2>Have questions about fruits?</h2>
      <form method="POST" name="contact" data-netlify="true">
        <label>Name</label>
        <p>
          <input type="text" name="name" />
        </p>
        <label>Email</label>
        <p>
          <input type="email" name="email" />
        </p>
        <label>Message</label>
        <p>
          <textarea name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  );
}

export default Contact;
