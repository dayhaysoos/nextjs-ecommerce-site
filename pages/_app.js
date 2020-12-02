import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { CartProvider } from "use-shopping-cart";
// import loadStripe

// return stripe promise with loadStripe (process.env.NEXT_PUBLIC_STRIPE_API_KEY)

function MyApp({ Component, pageProps }) {
  // wrap <CartProvider around <Component />

  // props
  /**  
   stripe={stripePromise}
   successUrl={`${process.env.URL || "http://localhost:8888"}/success`}
   cancelUrl={"https://twitter.com/dayhaysoos"}
   currency="USD"
   allowedCountries={["US", "GB", "CA"]}
   billingAddressCollection={true}
   mode="checkout-session" 
*/
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
