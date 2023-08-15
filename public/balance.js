function BalanceHTML({ loggedInUser }) {
  return (
    <>
      <h2 style={{ borderBottom: `1px solid gray` }}>{loggedInUser.name}</h2>
      <h5 style={{ borderBottom: `1px solid gray` }}>Basic Checking Account</h5>
      <h5 className="card-title">Account Balance:</h5>
      <h1>$ {loggedInUser.balance}</h1>
    </>
  );
}
function Balance() {
  const { loggedInUser } = useUserContext();

  return (
    <>
      <Card
        message={<BalanceHTML loggedInUser={loggedInUser} />}
        color="primary"
        name="Balance"
      />
    </>
  );
}
