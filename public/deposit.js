function Deposit() {
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");

  const { loggedInUser } = useUserContext();

  function handleChange(e) {
    console.log(e.target.id);
    setStatus("");
    setAmount(() => {
      return Number(e.target.value);
    });
    console.log(typeof amount, amount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (amount < 0.01) {
      setStatus("Deposit minimum value is $.01");
      setAmount("");
      return;
    }
    setAmount("");
    setStatus("Your money has been deposited!");
    //ACCESS DATABASE FOR CURRENT USER AND ADD AMOUNT TO THEIR BALANCE
    console.log("submitted");
  }

  return (
    <>
      <Card
        form="true"
        color="warning"
        name="Deposit"
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputsArray={[{ name: "Deposit", type: "number" }]}
        min=".01"
        max=""
        status={status}
        amount={amount}
      />
    </>
  );
}
