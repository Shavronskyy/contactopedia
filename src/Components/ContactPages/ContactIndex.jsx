import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          Id: 1,
          Name: "Ben Parker",
          Phone: "+380 9696 81 232",
          Email: "ben@gmail.com",
          isFavourite: false,
        },
        {
          Id: 2,
          Name: "Alinka Parker",
          Phone: "+380 9691 23 232",
          Email: "alinka@gmail.com",
          isFavourite: true,
        },
        {
          Id: 3,
          Name: "Dima Parker",
          Phone: "+380 1231 23 232",
          Email: "dima@gmail.com",
          isFavourite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    let getId =
      this.state.contactList[this.state.contactList.length - 1].Id + 1;
    if (newContact.Name == "") {
      return { status: "failure", msg: "Please enter valid name" };
    } else if (newContact.Phone == "") {
      return { status: "failure", msg: "Please enter valid phone number" };
    }
    const isDuplicateRecord = this.state.contactList.filter((x) => {
      if (x.Name == newContact.Name && x.Phone == newContact.Phone) {
        return true;
      }
    });

    if (isDuplicateRecord.length > 0) {
      return {
        status: "failure",
        msg: "User with same name or phone number is already exist",
      };
    }

    const newFinalContact = { ...newContact, getId, isFavourite: false };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
    return { status: "Success", msg: "Contact was added successfully" };
  };

  handleToggleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.Id == contact.Id) {
            return { ...obj, isFavourite: !obj.isFavourite };
          }

          return obj;
        }),
      };
    });
  };

  handleRemoveContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((x) => x.Id !== contactId),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    let getId = 1;
    if (this.state.contactList.length > 0) {
      getId = this.state.contactList[this.state.contactList.length - 1].Id + 1;
    }

    const newFinalContact = { ...newContact, getId, isFavourite: false };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContacts = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateContact = (contact) => {
    this.setState(() => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleCancelUpdateContact = () => {
    this.setState(() => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };

  handleClickUpdate = (updatedContact) => {
    if (updatedContact.Name == "") {
      return { status: "failure", msg: "Please enter valid name" };
    } else if (updatedContact.Phone == "") {
      return { status: "failure", msg: "Please enter valid phone number" };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.Id == updatedContact.Id) {
            console.log("hello bug")
            return {
              ...obj,
              Name: updatedContact.Name,
              Email: updatedContact.Email,
              Phone: updatedContact.Phone,
            };
          }
          return obj;
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "Success", msg: "Contact was updated successfully" };
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContacts
                handleRemoveAllContacts={this.handleRemoveAllContacts}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  cancelUpdateClick={this.handleCancelUpdateContact}
                  handleUpdateContactClick={this.handleClickUpdate}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === true
                  )}
                  updateContactClick={this.handleUpdateContact}
                  favouriteClick={this.handleToggleFavourite}
                  removeContactClick={this.handleRemoveContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === false
                  )}
                  updateContactClick={this.handleUpdateContact}
                  favouriteClick={this.handleToggleFavourite}
                  removeContactClick={this.handleRemoveContact}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
