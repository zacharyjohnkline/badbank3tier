function Withdraw() {
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");

  const { loggedInUser } = useUserContext();

  function handleChange(e) {
    setAmount(() => {
      return Number(e.target.value);
    });
    setStatus("");
    console.log(amount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //ACCESS DATABASE FOR CURRENT USER AND SUBTRACT AMOUNT FROM THEIR BALANCE
    if (amount < 0.01) {
      setStatus("Withdraw minimum value is $.01");
      setAmount("");
      return;
    }
    setAmount("");
    setStatus("Your money has been withdrawn.");
    console.log("submitted");
  }

  return (
    <>
      <Card
        form="true"
        color="danger"
        name="Withdraw"
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputsArray={[{ name: "Withdraw", type: "number" }]}
        min=".01"
        max={loggedInUser.balance}
        amount={amount}
        status={status}
      />
    </>
  );
}
