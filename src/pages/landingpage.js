import React from 'react';
import {
    Row, Col,
    Button, Icon, Input, Form,
    Typography
} from 'antd';
import {
    BasicLandingPageRow,
    RowAlignCenter,
    RowGreen,
    RowSmokeBlue
} from "../components/styled_components";
import { PriceComponent } from "./pricing";
import googlePlayImg from '../images/google-play-badge.svg';
import appStoreImg from '../images/download-on-the-app-store-apple.svg';


/** *****************************************************************
 *                                                                  *
 *                          MAIN COMPONENT                          *
 *                                                                  *
 * ******************************************************************/
export default () => (
    <React.Fragment>
        <RowAlignCenter>
            <Typography.Title>Employee Planning - Made Better!</Typography.Title>
            <h3>Say hello to TITANPLAN - a trully versatile shiftplanning solution</h3>
            <Typography.Title>FREE FOR UNLIMITED USERS</Typography.Title>

            <PlanningInputForm />
        </RowAlignCenter>

        <Row gutter={40}>
            <Col span={12} push={3}>
                <iframe title="titanplandanish" width="460" height="255" src="https://www.youtube.com/embed/CHXfyO5Q5YY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
            <Col span={12} push={1}>
                <Typography.Title level={3}>Why use TITANPLAN?</Typography.Title>
                <p>Spend 90 seconds getting to know us</p>

                <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Shift Planning</h3>
                <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Time Registration</h3>
                <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Communication</h3>
            </Col>
        </Row>

        <RowAlignCenter>
            <Typography.Title level={2}>OPTIMISE YOUR BUSINESS</Typography.Title>
            <Row gutter={32}>
                <OptimiseItem
                    optimiseIcon={<Icon type="schedule" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Shift Planning'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<Icon type="carry-out" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Time Registration'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<Icon type="message" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Messaging'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />

            </Row>
            <br />
            <Row gutter={32}>
                <OptimiseItem
                    optimiseIcon={<Icon type="calendar" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Calendar Integration'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<Icon type="environment" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Smart Location'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<Icon type="bar-chart" style={{ fontSize: '48px', color: 'green' }} />}
                    optimiseTitle='Statistics'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
            </Row>
        </RowAlignCenter>

        <div style={{ backgroundColor: '#B2FCFE' }}>
            <PriceComponent />
        </div>

        <Row>
            <RowAlignCenter>
                <Typography.Title>FREE UP TO 40% OF YOUR TIME</Typography.Title>
                <p>Once you fully integrate TITANPLAN, you will be</p>
                <p>surprised how much more time you have to develop your business</p>
            </RowAlignCenter>
            <Row>
                <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Let colleagues swap shifts</h3>
                <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> More data - less questions</h3>
            </Row>
        </Row>

        <RowGreen>
            <Typography.Title level={2} style={{ color: 'white' }}>HUJAMBO! Chào bạn</Typography.Title>
            <p>Being low cost and highly customisable, including crowd-sourced translation</p>
            <p>TITANPLAN is the go-to workforce planner for Asia and Africa.</p>
            <br />
            <p>(and YES, we are available in Vietnamese and Swahili)</p>
        </RowGreen>

        <RowSmokeBlue>
            <Typography.Title level={2}>GET ORGANISED</Typography.Title>
            <Typography.Title level={2}>DOWNLOAD OUR APP TODAY</Typography.Title>

            <BasicLandingPageRow>
                <Button htmlType="button">
                    <img src={appStoreImg} alt="AppStore" />
                </Button>
                <Button htmlType="button">
                    <img src={googlePlayImg} alt="GooglePlay" />
                </Button>
            </BasicLandingPageRow>

            <p>Get the TITANPLAN app for iOS or Android here!</p>
            <p>All you need for scheduling, communication, shift planning and time registration</p>
        </RowSmokeBlue>


    </React.Fragment>
);

/** *****************************************************************
 *                                                                  *
 *               SUB COMPONENTS + HELPER FUNCTIONS                  *
 *                                                                  *
 * ******************************************************************/

// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
// }

class PlanningInputFormBase extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            } else {
                alert('error !!!');
            }
        });
    };

    render() {
        const { 
            getFieldDecorator, 
            // getFieldsError, 
            getFieldError, 
            isFieldTouched 
        } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const companyError = isFieldTouched('company') && getFieldError('company');
        return (
            // <Form layout="inline" onSubmit={this.handleSubmit} style={{ backgroundColor: '#08B0A0' }}>
            //     <Form.Item>
            //         <Input
            //             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            //             placeholder="Full name"
            //         />
            //     </Form.Item>
            //     <Form.Item>
            //         <Input
            //             prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            //             type="email"
            //             placeholder="Email"
            //         />
            //     </Form.Item>
            //     <Form.Item>
            //         <Input
            //             prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
            //             type="text"
            //             placeholder="Company"
            //         />
            //     </Form.Item>
            //     <Form.Item>
            //         <Button type="primary" htmlType="submit">Start Planning</Button>
            //     </Form.Item>
            // </Form>
            <Form layout="inline" onSubmit={this.handleSubmit} style={{ backgroundColor: '#08B0A0' }}>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your full name!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Full name"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                    {
                        getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid email'
                                },
                                {
                                    required: true,
                                    message: 'Please input your email!'
                                }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="Email"
                            />,
                        )
                    }
                </Form.Item>
                <Form.Item validateStatus={companyError ? 'error' : ''} help={companyError || ''}>
                    {
                        getFieldDecorator('company', {
                            rules: [{ required: true, message: 'Company required!' }],
                        })(
                            <Input
                                prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type='text'
                                placeholder="Company"
                            />,
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {/* <Button ghost htmlType="submit" shape='round' disabled={hasErrors(getFieldsError())}> */}
                    <Button ghost htmlType="submit" shape='round'>
                        Start Planning
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const PlanningInputForm = Form.create()(PlanningInputFormBase);

const OptimiseItem = ({ optimiseIcon, optimiseTitle, optimiseDescription }) => (
    <Col span={8}>
        {optimiseIcon}
        <h3><strong>{optimiseTitle}</strong></h3>
        <p>{optimiseDescription}</p>
    </Col>
);