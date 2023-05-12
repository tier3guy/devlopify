const Card = ({ height, data }) => {
  return (
    <>
      <div
        className="card mb-4 rounded-3 shadow-sm"
        style={
          data.active
            ? { border: "6px solid var(--purple)", borderRadius: "10px" }
            : {}
        }
      >
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{data.name}</h4>
        </div>
        <div
          className="card-body d-flex flex-column justify-between"
          style={{ height: height }}
        >
          <div>
            <div
              className="d-flex"
              style={{
                alignItems: "baseline",
              }}
            >
              <h1
                className="card-title pricing-card-title"
                style={{
                  textDecoration: data.discount ? "line-through" : "none",
                  fontSize: "2rem",
                }}
              >
                ₹{data.pricing}
              </h1>
              <h1
                className="text-muted fw-light"
                style={{
                  textDecoration: "none",
                }}
              >
                /-
              </h1>
            </div>
            {data.discount && (
              <div
                className="d-flex"
                style={{
                  alignItems: "baseline",
                }}
              >
                <h1 className="card-title pricing-card-title">
                  ₹{Math.floor(data.pricing - (data.pricing + 1) * 0.15)}
                </h1>
                <h1
                  className="text-muted fw-light"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  /-
                </h1>
              </div>
            )}
            <ul className="list-unstyled mt-3 mb-4">
              {data.support.map((ele) => (
                <li>{ele}</li>
              ))}
            </ul>
          </div>
          <button type="button" className="btn-primary w-100">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
