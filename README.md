# Next JS e-commerce Workshop

Jamstack frameworks are changing the way we build top-of-the-line experiences on the web. They are performant, secure and enable developers to build web apps faster than before. In this workshop, Nick DeJesus will walk you through what it's like to build an e-commerce site using NextJS, use-shopping-cart and theme-ui. You will learn how serverless functions with Netlify to help you make secure transactions and how to build accessible UI components that extend use-shopping-cart's abilities.

Agenda - Around 4 hours

- Set up and Intro to NextJS: 15 min
- Theming with Theme-ui and components: 45 min
- Break: 5 min
- Intro to use-shopping-cart and Stripe: 30 min
- Building components with use-shopping-cart: 60 min
- Break: 30 min
- Serverless functions with Netlify and creating a Session ID: 30 mins
- Showing off some Netlify Features: Split Testing, Forms etc: 30 mins

## Get Started

Make sure you go to your Stripe Dashboard, get your API secret and Public keys, and add them to `.env.development` like this:

`NEXT_PUBLIC_STRIPE_API_KEY=pk_test_YOUR_KEY_HERE`
`STRIPE_API_SECRET=sk_test_YOUR_KEY_HERE`

1. Install the Netlify CLI
2. Run ntl login to hook up to their Netlify account
3. Click the Deploy to Netlify Button below to create a copy of the workshop repo
4. Clone the repo you just created
5. ntl link to hook up to it
6. ntl dev to build

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dayhaysoos/nextjs-ecommerce-site)
