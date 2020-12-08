import React from "react";
import { NavLink, Flex, Box } from "theme-ui";
import Link from "next/link";
import PropTypes from "prop-types";
import ShoppingCartIcon from "../components/shopping-cart-icon";

const Header = () => (
  <Box
    as="header"
    sx={{
      backgroundColor: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      as="nav"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: "space-evenly",
      }}
    >
      <Link href={"/"}>
        <NavLink as={"a"}>Home</NavLink>
      </Link>
      <Link href={"/products"}>
        <NavLink as={"a"}>Products</NavLink>
      </Link>
      <ShoppingCartIcon />
    </Flex>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
