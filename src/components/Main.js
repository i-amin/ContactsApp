require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import getData from '../data/contacts';
import ContactList from './contactList';
import SearchBar from './searchBar';
import AddNewContact from './addNewContact';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAddForm: false,
      searchKeyword: '',
      contactsList: getData()
    };
    this.deleteContact = this.deleteContact.bind(this);
    this.renderActionPanel = this.renderActionPanel.bind(this);
    this.handleContactAdd = this.handleContactAdd.bind(this);
  }

  deleteContact(conactToDelete) {
    this.setState({
      contactsList: this.state.contactsList.filter((contact)=>(
        contact.phone != conactToDelete.phone
      ))
    });
  }

  handleContactAdd(contact) {
    this.setState({
      contactsList: [{
        image: contact.imageURL,
        name: contact.name,
        phone: contact.phone
      }, ... this.state.contactsList]
    });
  }

  renderActionPanel() {
    if (this.state.activeAddForm)
      return <AddNewContact
        onContactAdd={this.handleContactAdd}
        onSwitch={()=> {
          this.setState({activeAddForm: !this.state.activeAddForm});
        }}
      />;
    else
      return (
        <SearchBar onSearch={(searchKey)=> {
          this.setState({searchKeyword: searchKey})
        }} onSwitch={()=> {
          this.setState({activeAddForm: !this.state.activeAddForm});
        }}/>
      )
  }

  render() {
    return (
      <div className="index app-container">
        <header>
          <h2>Contact Book</h2>
        </header>
        <div className="contact-book">
          {this.renderActionPanel()}
          <ContactList
            searchKey={this.state.searchKeyword}
            onDeleteHandler={this.deleteContact}
            contactsSource={this.state.contactsList}
          />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
