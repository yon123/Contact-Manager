import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{contact.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>email:</strong> {contact.email}
          </li>
          <li className="list-group-item">
            <strong>phone:</strong> {contact.phone}
          </li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
