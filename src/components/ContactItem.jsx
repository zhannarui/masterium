
const ContactsItem = (props) => {
    return(
        <div className="info-item">
            <p className="item-title">{props.contact.title}</p>
            <div className="item__text-box">
            <img src={'./img/' + props.contact.img} alt="" />
            <a href="tel:+79215557615">{props.contact.link}</a>
            </div>
        </div>
    )
} 
export default ContactsItem;