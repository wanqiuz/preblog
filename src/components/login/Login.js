import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form , Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import '../../styles/components/login/Login.css';

class WrappedLogin extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log("Riceived values of form: ", values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form className="login-form" onSubmit={this.onSubmit}>
          <FormItem>
            {
              getFieldDecorator(
                "username", {
                rules: [{ required: true, message: "Please input your username!"}],
              })(
                <Input prefix={<Icon type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />} placeholder="Username" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator(
                "password", {
                  rules: [{ required: true, message: "Please input your password!"}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )
            }
            <Link className="login-form-forgot" to="/">Forgot password</Link>
            <Button className="login-form-submit" type="primary" htmlType="submit">Log in</Button>
            Or <Link to="/">regiter now!</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const Login = Form.create({
  onFieldsChange(props, changedFields) {
    //console.log("changedFields", changedFields)
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    console.log("mapPropsToFields", props)
    return {
      username: Form.createFormField({
        ...props.username,
      }),
      password: Form.createFormField({
        ...props.password,
      }),
      remember: Form.createFormField({
        ...props.remember,
      }),
    };
  },
  onValuesChange(_, values) {
    //console.log("hello world")
    //console.log(values);
  },
})(WrappedLogin);

export default Login;