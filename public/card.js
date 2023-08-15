function Card({
  color,
  name,
  inputsArray,
  onChange,
  onSubmit,
  status,
  form,
  message,
  min,
  max,
  amount,
}) {
  return (
    <div
      className="card mb-3"
      style={{
        maxWidth: "540px",
        overflow: "hidden",
        backgroundColor: `${color}`,
      }}
    >
      <div className="row g-0">
        <div className="col-md-4" style={{ overflow: "hidden" }}>
          <img
            src="./HOLLY&IVY.png"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {form && (
              <form
                className=""
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {inputsArray.map((item) => {
                  return (
                    <div
                      key={`${name + item.name}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <label id={item.name + "-label"}>{item.name}</label>
                      <input
                        id={`${name}${item.type}`}
                        type={item.type}
                        name={item.name}
                        value={amount}
                        onChange={onChange}
                        min={min}
                        max={max}
                      />
                    </div>
                  );
                })}
                <Button
                  id="button"
                  color={color}
                  text={name}
                  padding="10px"
                  margin="10px"
                  onSubmit={onSubmit}
                />
                {status.length > 0 && <div id="status">{status}</div>}
                {!status.length && (
                  <div id="status" style={{ color: "white" }}>
                    Please input the desired amount!
                  </div>
                )}
              </form>
            )}
            {message && <div id="message">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
