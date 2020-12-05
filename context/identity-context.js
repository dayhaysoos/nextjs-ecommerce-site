const React = require("react");
const netlifyIdentity = require("netlify-identity-widget");

const IdentityContext = React.createContext({});

module.exports.IdentityContext = IdentityContext;

const IdentityProvider = (props) => {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    netlifyIdentity.init({});
  });

  netlifyIdentity.on("login", (user) => {
    netlifyIdentity.close();
    setUser(user);
  });

  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    setUser();
  });

  return (
    <IdentityContext.Provider value={{ identity: netlifyIdentity, user }}>
      {props.children}
    </IdentityContext.Provider>
  );
};

exports.Provider = IdentityProvider;
