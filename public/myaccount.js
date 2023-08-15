function MyAccountHTML({ loggedInUser, onSubmit }) {
  return (
    <>
      <h5
        style={{
          color: `${loggedInUser.favoriteColor}`,
          borderBottom: "1px solid gray",
        }}
      >
        Welcome! {loggedInUser.name}
      </h5>
      <h5 style={{ color: `${loggedInUser.favoriteColor}` }}>Email:</h5>
      <p>{loggedInUser.email}</p>
      <h5 style={{ color: `${loggedInUser.favoriteColor}` }}>Password:</h5>
      <p>{loggedInUser.password}</p>
      <Button
        color="primary"
        id="button"
        padding="10px"
        margin="10px"
        onSubmit={onSubmit}
        text="Logout"
      />
    </>
  );
}
function MyAccount() {
  const { loggedInUser, clearLoggedInUser } = useUserContext();
  function handleSubmit() {
    window.location.hash = "#/Home";
    clearLoggedInUser();
    console.log("This is when they are logged out.");
  }
  return (
    <>
      <Card
        message={
          <MyAccountHTML loggedInUser={loggedInUser} onSubmit={handleSubmit} />
        }
        color="warning"
        name="My Account"
      />
    </>
  );
}
