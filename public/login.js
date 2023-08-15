function Login() {
  const [currUser, setCurrUser] = React.useState({ email: "", password: "" });
  const { loggedInUser, loginUser, clearLoggedInUser } = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();
    //ACCESS DB, FIND USER, AND LOG IN USER
    console.log(currUser);
    const url = `/login/${currUser.email}/${currUser.password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      loginUser(data);
      console.log(loggedInUser.balance, typeof loggedInUser.balance);
      console.log(data);
      window.location.hash = "#/MyAccount";
    })();
  }
  function handleChange(e) {
    if (e.target.name === "Email") {
      setCurrUser({
        email: e.target.value,
        password: currUser.password,
      });
    } else if (e.target.name === "Password") {
      setCurrUser({
        email: currUser.email,
        password: e.target.value,
      });
    }
    console.log(currUser);
  }
  return (
    <>
      <Card
        form="true"
        color="info"
        name="Login"
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputsArray={[
          { name: "Email", type: "email" },
          { name: "Password", type: "password" },
        ]}
        min=""
        max=""
        status=""
      />
    </>
  );
}
