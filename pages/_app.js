import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { CartProvider } from "use-shopping-cart";
import { Provider } from "../context/identity-context";
const { loadStripe } = require("@stripe/stripe-js");

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <CartProvider
          stripe={stripePromise}
          successUrl={`${process.env.URL || "http://localhost:8888"}/success`}
          cancelUrl={"https://twitter.com/dayhaysoos"}
          currency="USD"
          allowedCountries={["US", "GB", "CA"]}
          billingAddressCollection={true}
          mode="checkout-session"
        >
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
