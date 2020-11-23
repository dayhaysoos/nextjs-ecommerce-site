/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import Header from "./header";
import CheckoutModal from "./checkout-modal";
import SkipLink from "./skip-link";

const Layout = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.nextjs.org">Next.js</a>
        </footer>
      </div>
      <CheckoutModal />
    </>
  );
};

export default Layout;
