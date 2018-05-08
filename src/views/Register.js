import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form , Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import BlogRegister from '../components/register/Register';
import { changeLoginForm } from '../redux/actions/blog';

class Register extends Component {
  render() {
    const fields = this.props.fields;
    return (
      <div>
        <BlogRegister {...fields} onChange={this.props.changeLoginForm} />
      </div>
    );
  }
}
export default connect(state => {
  return {
    fields: state.changeLoginFormReducer.fields,
  };
}, dispatch => {
  return {
    changeLoginForm: bindActionCreators(changeLoginForm, dispatch),
  };
})(Register);