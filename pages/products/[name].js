import Layout from "../../components/layout";
import products from "../../data/products.json";
import { Box, Button, Grid, Image } from "theme-ui";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  return `${slug}`.replace(/\/\/+/g, "/");
};

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: {
        name: slugify(product.name),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = products.filter((product) => {
    return slugify(product.name) === params.name;
  });

  return {
    props: { product: productData[0] },
  };
}

function Product({ product }) {
  const { name, image, currency, description, price } = product;
  const { addItem } = useShoppingCart();

  return (
    <Layout>
      <Box sx={{ maxWidth: "768px", margin: "0 auto" }}>
        <Grid sx={{ color: "primary", fontWeight: "700" }} columns={[1, 2]}>
          <Box>
            <Image alt={`${name}`} src={image} />
          </Box>
          <Box
            as="section"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            as="section"
          >
            <Box
              sx={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box as="p">{description}</Box>
              <Box as="p">
                {formatCurrencyString({ value: price, currency })}
              </Box>
            </Box>
            <Button
              aria-label={`Add ${name} to cart`}
              onClick={() => addItem(product)}
              sx={{ backgroundColor: "teal" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Product;
