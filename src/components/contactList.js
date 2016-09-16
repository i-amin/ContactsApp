import React from 'react';
import ContactItem from './contactItem'


const ContactsList = (props)=> {
  const filteredList = filterContactsByName(props.searchKey, props.contactsSource);
  return (
    <div className="list">
      <ul>
        {
          filteredList.map((contact)=>
            (<ContactItem
              key={contact.phone}
              contact={contact}
              onDelete={props.onDeleteHandler}
            />))
        }
      </ul>
    </div>
  )
};

function filterContactsByName(searchKey, contactsArr) {
  if (!searchKey) {
    return contactsArr;
  }
  return contactsArr.filter((contact)=> (contact.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1));
}

export default ContactsList;
