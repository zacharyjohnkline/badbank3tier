function Navbar() {
  const { loggedInUser } = useUserContext();
  const [user, setUser] = React.useState();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BadBank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!loggedInUser && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#/CreateAccount/"
                      id="createAccount"
                    >
                      Create Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/login/" id="login">
                      Login
                    </a>
                  </li>
                </>
              )}
              {loggedInUser && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#/MyAccount/" id="myAccount">
                      My Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/deposit/">
                      Deposit
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/withdraw/">
                      Withdraw
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/Balance/">
                      Balance
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" href="#/allData/">
                  All Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
