const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;

const UserContext = React.createContext({
  loggedInUser: false,
  loginUser: () => {},
  clearLoggedInUser: () => {},
});

const useUserContext = () => React.useContext(UserContext);

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = React.useState(false);

  function loginUser(user) {
    setLoggedInUser(user);
  }

  function clearLoggedInUser() {
    setLoggedInUser(false);
  }

  return (
    <UserContext.Provider
      value={{
        loggedInUser: loggedInUser,
        loginUser: loginUser,
        clearLoggedInUser: clearLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
