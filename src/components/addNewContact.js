import React, {Component} from 'react';

class AddNewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      name: '',
      phone: ''
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = ()=> {
      this.setState({
        imageURL: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  validatePhone(e) {
    e.preventDefault();
    if (/^[0-9]*$/.test(e.target.value)) {
      this.setState({phone: e.target.value});
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onContactAdd(this.state);
    this.props.onSwitch();
  }

  render() {

    const backgroundStyle = this.state.imageURL ?
    {
      backgroundImage: `url(${this.state.imageURL})`,
      color: 'transparent',
      backgroundSize: 'cover'
    } : {};

    return (
      <div className="action-panel clearfix">
        <form onSubmit={this.handleFormSubmit}>
          <div className="container image-selector">
            <a
              href="#"
              style={backgroundStyle}
              onClick={()=> {
                this.fileInput.click();
              }}
              className="btn btn-rounded">Select Photo</a>
            <input type="file"
                   ref={(ref)=> this.fileInput = ref}
                   onChange={(e)=>this.handleImageChange(e)}
            />
          </div>
          <div className="container contact-form">
            <input type="text" placeholder="Name"
                   onChange={(e)=>this.setState({name: e.target.value})}/>
            <input type="text"
                   placeholder="Phone"
                   value={this.state.phone}
                   onChange={this.validatePhone}/>
          </div>
          <div className="container actions">
            <a href="#" className="btn secondary" onClick={()=> this.props.onSwitch()}>Cancel</a>
            <button type="submit" className="btn primary">Save</button>
          </div>


        </form>
      </div>
    )
  }
}

export default AddNewContact;
