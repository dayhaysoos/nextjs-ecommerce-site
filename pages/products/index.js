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
  const { addItem } = useShoppingCart();
  return (
    <Layout>
      <Grid columns={4}>
        {products.map((product) => {
          return (
            <Box key={product.name}>
              <Link href={`/products/${product.slug}`}>
                <Flex
                  sx={{
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    flexDirection: "column",
                    color: "primary",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  <Image src={product.image} />
                  <Box as="p">{product.name}</Box>
                  <Box as="p">
                    {formatCurrencyString({
                      value: product.price,
                      currency: "USD",
                    })}
                  </Box>
                  <Box as="p">{product.description}</Box>
                </Flex>
              </Link>

              <Flex sx={{ justifyContent: "center" }}>
                <Button
                  onClick={() => addItem(product)}
                  sx={{ backgroundColor: "teal" }}
                  alt={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Layout>
  );
}
