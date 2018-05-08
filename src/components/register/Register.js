import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form , Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import '../../styles/components/register/Register.css';

class WrappedLogin extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log("Riceived values of form: ", values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className="login">
        <Form className="login-form" onSubmit={this.onSubmit}>
          <FormItem {...formItemLayout} label="Username">
            {
              getFieldDecorator("username", {
                rules: [{
                  required: true, message: "Please input your Username",
                }],
              })(
                <Input />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label="E-mail">
            {
              getFieldDecorator("email", {
                rules: [{
                  type: "email",
                  message: "The input is not valid E-mail",
                }, {
                  required: true, message: "Please input your E-mail!",
                }],
              })(
                <Input />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label="Password">
            {
              getFieldDecorator(
                "password", {
                rules: [{
                  required: true, message: "Please input your password!",
                }, {
                  vaildator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label="Confirm Password">
            {
              getFieldDecorator(
                "confirm", {
                rules: [{
                  required: true, message: "Please confirm your password!",
                }, {
                  vaildator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )
            }
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {
              getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
              <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
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