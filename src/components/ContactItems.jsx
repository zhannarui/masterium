import React from "react";
import ContactsItem from "./ContactItem";

const ContactItems = (props) => {
    return(
        <div className="text__block-info">
        {props.contacts.map(el => (
            <ContactsItem key={el.id} contact = {el}/>
        ))}
        </div>
    )
}

export default ContactItems;