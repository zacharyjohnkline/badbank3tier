function App() {
  const { loggedInUser } = useUserContext();
  return (
    <>
      <HashRouter>
        <div>
          <UserProvider>
            <Navbar />
            <div className="container" style={{ padding: "20px" }}>
              <Route path="/" exact component={Home} />
              <Route path="/Home" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/Login/" component={Login} />
              <Route path="/Alldata/" component={AllData} />
              <Route path="/MyAccount/" component={MyAccount} />
              <Route path="/Deposit/" component={Deposit} />
              <Route path="/Withdraw/" component={Withdraw} />
              <Route path="/Balance/" component={Balance} />
            </div>
          </UserProvider>
        </div>
      </HashRouter>
    </>
  );
}

const app = document.getElementById("root");
const root = ReactDOM.createRoot(app);
root.render(<App />);
