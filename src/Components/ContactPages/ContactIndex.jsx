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
    };
  }

  handleAddContact = () => {
    alert('hi)');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact}/>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite === false
                  )}
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
