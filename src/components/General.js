import { Component } from "react";
import Input from "./Input";

export default class General extends Component {
  render() {
    return (
      <div className='cv-section'>
        <h3>{this.props.header}</h3>
        <Input inputType='text' inputName='name' info={this.props.applicationInfo.name} handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='email' info={this.props.applicationInfo.email} handleInputs={this.props.handleInputs} />
        <Input inputType='text' inputName='phone' info={this.props.applicationInfo.phone} handleInputs={this.props.handleInputs} />
      </div>
    );
  }
}