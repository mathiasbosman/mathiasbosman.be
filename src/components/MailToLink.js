import React from "react";
import PropTypes from "prop-types";
import {Button} from "@primer/react";
import {decrypt} from "../Utils";

/**
 * Creates a button to send an email.
 * If "safe" the given property "email" will be decrypted
 */
export default class MailToLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: props.mail,
      safe: props.safe
    }
    this._sendMail = this._sendMail.bind(this);
  }

  _sendMail() {
    let email = this.state.mail;
    if (this.state.safe) {
      email = decrypt(email);
    }
    window.open(`mailto:${email}`, '_blank');
  }

  render() {
    return (<Button onClick={this._sendMail} {...this.props}>
      {this.props.children}
    </Button>)
  }
}

MailToLink.propTypes = {
  safe: PropTypes.bool,
  children: PropTypes.any,
  mail: PropTypes.string.isRequired
}
