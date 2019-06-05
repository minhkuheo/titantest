import React from 'react';
import Layout from '../components/layout';
import {
    Form, Icon, Input, Button, Checkbox,
    Row, Col
} from 'antd';
// import { RowAlignCenter } from '../components/styled_components';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                alert('Received input!. Function TBA');
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Layout>
                <Row align="middle">
                    <Col span={12} offset={7}>

                        <Form onSubmit={this.handleSubmit} style={{ width: '300px' }}>
                            <Form.Item label="Email">
                                {
                                    getFieldDecorator('username', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'The input is not a valid email!'
                                            },
                                            {
                                                required: true, 
                                                message: 'Please input your username!' 
                                            }
                                        ],
                                    })(
                                        <Input
                                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="email"
                                            placeholder="Email"
                                        />,
                                    )
                                }
                            </Form.Item>
                            <Form.Item label="Password" hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { 
                                            required: true, 
                                            message: 'Please input your Password!'
                                        }
                                    ],
                                })(
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        // type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>Remember me</Checkbox>
                                    )
                                }
                                
                                <a style={{ float: 'right' }} href="/login">
                                    Forgot password
                                </a>
                                
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Log in
                                </Button>
                                
                                Or <a href="/login">request now!</a>
                            </Form.Item>
                        </Form>
                    </Col>
                    
                </Row>
            </Layout>
        );
    }
}

export default Form.create()(Login);