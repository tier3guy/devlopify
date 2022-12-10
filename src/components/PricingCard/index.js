
const Card = ({ height, data }) => {
  return (
    <>
      <div className="card mb-4 rounded-3 shadow-sm" style={ (data.active) ? { border: "6px solid var(--purple)", borderRadius: "10px" } : {}}>
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{data.name}</h4>
        </div>
        <div
          className="card-body d-flex flex-column justify-between"
          style={{ height: height }}
        >
          <div>
            <h1 className="card-title pricing-card-title">
              ₹{data.pricing}<small className="text-muted fw-light">/-</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              {
                data.support.map((ele) => <li>{ele}</li>)
              }
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