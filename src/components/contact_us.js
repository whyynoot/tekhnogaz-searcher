import React from "react";
import Contact_component from "./contact_component";
import instance from "./api/api_service";
class Contact_us extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      message: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    instance
      .post("/api/create_request/", {
        name: this.state.name,
        mobile: this.state.phone,
        msg: this.state.message,
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, phone, message } = this.state;
    return (
      <>
        <Contact_component />

      </>
    );
  }
}

export default Contact_us;
