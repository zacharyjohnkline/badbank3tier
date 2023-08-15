function List({ ctx, message }) {
  return (
    <>
      <h5>{message}</h5>
      <p>{JSON.stringify(ctx)}</p>
    </>
  );
}
function DataDivision() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    //fetch all accounts from API
    fetch("/account/alldata")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <Card
        message={
          <List
            ctx={data}
            message="Here's a sneak peak at all the users!  This is why we are called bad bank."
          />
        }
        color="warning"
        name="Sneak Peak into All User Data!"
      />
    </>
  );
}
function AllData() {
  return (
    <>
      <DataDivision />
    </>
  );
}
