import React, { useContext } from "react";
import { Router, Link as RouterLink } from "@reach/router";
import { NavLink, Flex, Box, Button } from "theme-ui";
import Link from "next/link";
import PropTypes from "prop-types";
import ShoppingCartIcon from "./shopping-cart-icon";
import { IdentityContext } from "../context/identity-context";

const Dashboard = () => {
  return <h2>This is the dashboard</h2>;
};

const Header = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);

  return (
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
        {user && (
          <>
            <Link href={"dashboard"}>
              <NavLink as="a">Dashboard</NavLink>
            </Link>
          </>
        )}
        <Link href={"/contact"}>
          <NavLink as={"a"}>Contact</NavLink>
        </Link>
        <ShoppingCartIcon />
        {!user ? (
          <Button
            sx={{ backgroundColor: "transparent", color: "white" }}
            onClick={() => netlifyIdentity.open()}
          >
            Log in
          </Button>
        ) : (
          <Flex>
            <Button
              sx={{ backgroundColor: "transparent", color: "white" }}
              onClick={() => netlifyIdentity.logout()}
            >
              Log out
            </Button>
            <Box as={"p"} sx={{ p: 2, color: "white" }}>
              {user.user_metadata.full_name}
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
