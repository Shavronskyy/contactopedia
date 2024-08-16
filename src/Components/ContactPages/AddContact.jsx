import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: undefined,
      succuessMessages: undefined,
    };
  }

  handleCancel = () => {
    this.props.cancelUpdateClick();
  };

  handleAddContactForSubmit = (e) => {
    e.preventDefault();
    const Name = e.target.elements.contactName.value.trim();
    const Email = e.target.elements.contactEmail.value.trim();
    const Phone = e.target.elements.contactPhone.value.trim();
    const Id = e.target.elements.contactId.value.trim();
    let response = undefined;

    if (this.props.isUpdating) {
      response = this.props.handleUpdateContactClick({
        Name: Name,
        Email: Email,
        Phone: Phone,
        Id: Id,
      });
    } else {
      response = this.props.handleAddContact({
        Name: Name,
        Email: Email,
        Phone: Phone,
      });
    }
    if (response.status == "Success") {
      document.querySelector(".contact-form").reset();
      this.setState({
        errorMessages: undefined,
        succuessMessages: response.msg,
      });
    } else {
      this.setState({
        errorMessages: response.msg,
        succuessMessages: undefined,
      });
    }
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactForSubmit}
          className="contact-form"
        >
          <input 
          hidden
          name="contactId"
          defaultValue={this.props.isUpdating ? this.props.selectedContact.Id : ""}
          >
          </input>
          <div className="row p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update contact" : "Add a new Contact"}
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name"
                name="contactName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.Name : ""
                }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email"
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.Email : ""
                }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone number"
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.Phone : ""
                }
              ></input>
            </div>

            {this.state.errorMessages == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessages}
              </div>
            )}
            {this.state.succuessMessages == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.succuessMessages}
              </div>
            )}
            <div
              className={`col-12 p-1 ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
              <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control btn-sm"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
