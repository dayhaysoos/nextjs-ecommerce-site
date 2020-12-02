import React from "react";
import { Box, Grid, Flex, Image, Button } from "theme-ui";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import Layout from "../../components/layout";
import productData from "../../data/products.json";
import Link from "next/link";

export async function getStaticProps() {
  const products = productData.map((product) => {
    return product;
  });

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  // render products
  return <h1>Products Page</h1>;
}
