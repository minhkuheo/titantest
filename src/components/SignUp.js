import React from 'react';
import styled from 'styled-components';
import { 
    Button, Modal, Icon,
    Form, Input
 } from 'antd';

const StartSchedulingButton = styled(Button)`
    background-color: #08B0A0;
    ${props => props.alwaysbottom && `
        position: fixed; 
        z-index: 2;
        bottom: 30px; 
        right: 20px;
    `};
`;

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export class LetsSignUpButton extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    showModal = () => this.setState({ visible: true });
    handleCancel = () => this.setState({ visible: false });

    handleRequest= () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                console.log('Error at form validation !');
                return;
            }

            console.log('Received values of form: ', values);

            // Cleanning job
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <React.Fragment>
                <StartSchedulingButton 
                    size="large" 
                    shape="round"
                    // alwaysbottom={alwaysbottom ? true : undefined}
                    alwaysbottom={this.props.alwaysbottom ? 1 : 0}
                    onClick={this.showModal}
                >
                    Let's Start Scheduling
                </StartSchedulingButton>
    
                {
                    this.state.visible &&
                    <PlanningInputForm 
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onRequest={this.handleRequest}
                    />
                }
            </React.Fragment>
        );
    }
};

class SignUpFormBase extends React.Component {

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //             alert('yes');
    //             setFieldsValue({
    //                 firstname: '',
    //                 lastname: '',
    //                 email: '',
    //                 company: ''
    //             });
    //         }
    //     });
    // };
    render() {
        const { visible, onCancel, onRequest, form } = this.props;
        const { getFieldDecorator } = form;
    
        return (
            <Modal
                title="Get invitation"
                visible={visible}
                closable
                onOk={onRequest}
                okText="Request"
                onCancel={onCancel}
            >
                <Form>
                    <Form.Item {...formItemLayout} label="* First name">
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="First name (*)"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="* Last name">
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Last name (*)"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="* Email">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'must contain "@" and ".com"',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="Email (*)"
                            />
                        )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="* Company">
                        {getFieldDecorator('company', {
                            rules: [{ required: true, message: 'Please input your company!' }],
                        })(
                            <Input
                                prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="text"
                                placeholder="Company (*)"
                            />,
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
};

const PlanningInputForm = Form.create()(SignUpFormBase);

// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
// }