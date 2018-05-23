import React from "react";

const ResumeContact = ({ contact: { contact, link } }) => {
  return (
    <p>
      {link ? (
        <a
          href={link}
          alt={contact}
          target="blank"
          style={{ display: "inline" }}
        >
          | {contact}{" "}
        </a>
      ) : null}
    </p>
  );
};

export default ResumeContact;

// {contacts.forEach(contact => {
//   contact.link ? (
//     <a href={contact.link} alt={contact.contact}>
//       {contact.contact}
//     </a>
//   ) : null;
// })}
