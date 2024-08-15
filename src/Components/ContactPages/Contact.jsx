const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 col-md-1 pt-2 pt-md-1">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.Name}`}
          style={{ width: "80%" }}
          alt=""
        />
      </div>
      <div className="col-6 col-md-5 text-warning pt-0">
        <span className="h4">{props.contact.Name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.Email}
          <br />
          {props.contact.Phone}
        </div>
      </div>
      <div className="col-2 col-md-2 pt-md-3">
        <button className={`btn btn-sm m-1 ${
            props.contact.isFavourite ? "btn-warning" : "btn-outline-warning"
        }`}>
            <i class="bi bi-star" style={{fontSize: "1rem" }}></i>
        </button>
      </div>
      <div className="col-2 col-md-3 pt-md-3">
        <button className="btn btn-primary btn-sm m-1">
            <i class="bi bi-pencil-square" style={{ fontSize:"1rem" }}></i>
        </button>
        <button className="btn btn-danger btn-sm m-1">
            <i class="bi bi-trash3-fill" style={{ fontSize:"1rem" }}></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
