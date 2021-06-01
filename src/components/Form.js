import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null,

    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: 'https://example.com/api/contact/index.php', //change this to correct endpoint 
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  //handle changing fields

  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {

    return (
      <div className="form-wrapper">

        <div>
          <form action="#">
            {/* Name */}

            <label class="block mt-8">
              <span class="">Name</span>
              <input type="text" 
              class="mt-0 bg-transparent block w-full px-0.5 border-0 border-b-2 border-white focus:ring-0 focus:border-primary-20 focus:bg-primary-20" 
              placeholder="" 
              value={this.state.name}
              onChange={e => this.handleChange(e, 'name')}
              required />
            </label>


            <label class="block mt-8">
              <span class="">Email</span>
              <input 
              type="email"   
              class="mt-0 bg-transparent block w-full px-0.5 border-0 border-b-2 border-white focus:ring-0 focus:border-primary-20 focus:bg-primary-20" 
              placeholder="me@example.com"
              value={this.state.email}
              onChange={e => this.handleChange(e, "email")}
              required />
            </label>
            <label class="block mt-8">
              <span class="">Message</span>
              <textarea type="text" 
              class="mt-0 block w-full bg-transparent px-0.5 border-0 border-b-2 border-white focus:ring-0 focus:border-primary-20 focus:bg-primary-20" 
              rows="2"
              value={this.state.msg}
              onChange={e => this.handleChange(e, "msg")}
              ></textarea>
            </label>
            <label class="block mt-8">
              <button type="submit" class="mt-0 block bg-primary-20 py-2 px-4 border-0 border-b-2 border-white focus:ring-0 focus:border-primary-20 focus:bg-primary-20"
              value={this.state.email}
              onClick={e => this.handleFormSubmit(e)}
              >Submit</button>
            </label>

            <div>

              {this.state.mailSent && <div className="success">Successfully sent. thanks for contacting me.</div>}
              {this.state.error && <div className="error">Error, please try again.</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
