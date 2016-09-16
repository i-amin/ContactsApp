import React from 'react';

const ContactItem = ({contact, onDelete})=> {

  function handleClick() {
    onDelete(contact);
  }

  return (
    <li className="item clearfix">
      <div className="image-wrapper">
        <img src={contact.image}/>
      </div>
      <div className="action">
        <a onClick={handleClick} className="btn btn-delete btn-rounded">&times;</a>
      </div>
      <div className="info">
        <span className="name">{contact.name}</span>
        <span className="phone">{formatPhone(contact.phone)}</span>
      </div>
    </li>
  )
};


function formatPhone(num) {
  const rgx = /(\d{1})(\d{3})(\d{3})(\d{4}$)/,
    format = '$1-($2)$3-$4';

  return num.replace(rgx, format);
}

export default ContactItem;
