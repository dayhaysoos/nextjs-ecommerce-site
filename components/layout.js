import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Add <SkipLink /> */}
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
      {/* Add <CheckoutModal /> */}
    </>
  );
};

export default Layout;
