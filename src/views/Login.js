import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form , Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import BlogLogin from '../components/login/Login';
import { changeLoginForm } from '../redux/actions/blog';

class Login extends Component {
  render() {
    const fields = this.props.fields;
    return (
      <div>
        <BlogLogin {...fields} onChange={this.props.changeLoginForm} />
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
})(Login);