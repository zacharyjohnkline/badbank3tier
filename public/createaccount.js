function CreateAnother({ message, onSubmit, onLogin }) {
  return (
    <>
      <h5>{message}</h5>
      <Button
        color="primary"
        id="button"
        padding="10px"
        margin="10px"
        onSubmit={onSubmit}
        text="Create Aother"
      />
      <Button
        color="primary"
        id="button"
        padding="10px"
        margin="10px"
        onSubmit={onLogin}
        text="Login"
      />
    </>
  );
}
function CreateAccount() {
  const [userObject, setUserObject] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [created, setCreated] = React.useState(false);
  const [amount, setAmount] = React.useState();
  const { loggedInUser, loginUser, clearLoggedInUser } = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userObject);
    console.log(created);
    setCreated(true);
    const url = `/account/create/${userObject.name}/${userObject.email}/${userObject.password}/${userObject.favoriteColor}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
  }

  function handleChange(e) {
    if (e.target.name === "Name") {
      setUserObject({
        name: e.target.value,
        email: userObject.email,
        password: userObject.password,
        favoriteColor: userObject.favoriteColor,
        balance: 1000,
        movements: [],
        loggedIn: false,
      });
    } else if (e.target.name === "Email") {
      setUserObject({
        name: userObject.name,
        email: e.target.value,
        password: userObject.password,
        favoriteColor: userObject.favoriteColor,
        balance: 1000,
        movements: [],
        loggedIn: false,
      });
    } else if (e.target.name === "Password") {
      setUserObject({
        name: userObject.name,
        email: userObject.email,
        password: e.target.value,
        favoriteColor: userObject.favoriteColor,
        balance: 1000,
        movements: [],
        loggedIn: false,
      });
    } else if (e.target.name === "Favorite Color") {
      setUserObject({
        name: userObject.name,
        email: userObject.email,
        password: userObject.password,
        favoriteColor: e.target.value,
        balance: 1000,
        movements: [],
        loggedIn: false,
      });
    }
    console.log(userObject);
  }

  function handleCreateAnother(e) {
    setCreated(false);
  }

  function handleLogin(e) {
    e.preventDefault();
    //ACCESS DB, FIND USER, AND LOG IN USER
    console.log(userObject);
    const url = `/login/${userObject.email}/${userObject.password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      loginUser(userObject);
      console.log(loggedInUser);
      console.log(data);
      window.location.hash = "#/MyAccount";
    })();
    console.log(loggedInUser);
    setAmount();
  }

  return (
    <>
      {!created && (
        <Card
          form="true"
          color="primary"
          name="Create Account"
          onSubmit={handleSubmit}
          onChange={handleChange}
          inputsArray={[
            { name: "Name", type: "text" },
            { name: "Email", type: "email" },
            { name: "Password", type: "password" },
            { name: "Favorite Color", type: "text" },
          ]}
          min=""
          max=""
          status=""
          amount={amount}
        />
      )}
      {created && (
        <Card
          color="primary"
          name="Congratulations!"
          message={
            <CreateAnother
              message="Congratulations!  You have signed up!"
              onSubmit={handleCreateAnother}
              onLogin={handleLogin}
            />
          }
        />
      )}
    </>
  );
}
