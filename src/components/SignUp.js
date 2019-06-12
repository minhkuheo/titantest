import React from 'react';
import {
    StartSchedulingButton
} from './styled_components';

export default (props) => (
    <SignUpButton {...props}/>
);

const SignUpButton = (props) => {
    return (
        <React.Fragment>
            <StartSchedulingButton
                size="large"
                shape="round"
                // alwaysbottom={alwaysbottom ? true : undefined}
                alwaysbottom={props.alwaysbottom ? 1 : 0}
                href="https://app.titanplan.com/account/register"
            >
                <strong>Let's Start Scheduling</strong>
            </StartSchedulingButton>
        </React.Fragment>
    );
};

// const formItemLayout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };

// const STATUS_SUCCESS = '01';
// const STATUS_ERROR = '02';
// const INITIAL_STATE = {
//     visible: false,
//     sendingRequest: false,
//     statusRequest: ''
// }

// // const responsedStatus = response => {
// //     if (response.status >= 200 && response.status < 300) {
// //         return Promise.resolve(response);
// //     } else {
// //         return Promise.reject(new Error(response.statusText)); 
// //     } 
// // }

// const fetchUrl = async (URL, data) => {
//     const response = await fetch(URL, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "omit", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//         },
//         redirect: "follow", // manual, *folslow, error
//         referrer: "client", // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     // const json = await response.json().then(
//     const status = await response.json().then(() => {
//         return response.status === 200 ? STATUS_SUCCESS : STATUS_ERROR;
//     });
    
//     return status;
// }

// export class LetsSignUpButton extends React.Component {
//     constructor() {
//         super();
//         this.state = {...INITIAL_STATE};
//     }

//     showModal = () => this.setState({ visible: true });
//     handleCancel = () => this.setState({ visible: false });
//     handleCloseOnRequestDone = () => this.setState({...INITIAL_STATE});

//     handleRequest = async () => {
//         const { visible, sendingRequest, statusRequest } = this.state;
        
//         if (visible && !sendingRequest && !!statusRequest) {
//             // if the modal is opening AND
//             // the request is already sent and got the response back AND 
//             // the status has been changed (success or error)
//             this.handleCloseOnRequestDone;
//         } else {
//             // On SENDING A NEW REQUEST
//             const form = this.formRef.props.form;
//             form.validateFields(async (err, values) => {
//                 if (err) {
//                     console.log('Error at form validation !');
//                     return;
//                 }
                
//                 this.setState({
//                     sendingRequest: true
//                 }, async () => {
//                     console.log('Received values of form: ', values);
        
//                     // Send HTTP Request to the server
//                     const URL = "https://apidev.titanplan.com/api/user/createOwnerAccount";
//                     const data = {
//                         "email": `${values.email}`,
//                         "company_name": `${values.company}`,
//                         "full_name": `${values.firstname} ${values.lastname}`
//                     }
        
//                     try {
//                         // const statusStateHook = useFetchPost(URL, true, data);
//                         const statusStateHook = await fetchUrl(URL, data);
//                         this.setState({ error: '' });
                        
//                         console.log(statusStateHook);
//                         return statusStateHook;
//                         //     // Cleanning job
//                         //     // form.resetFields();
//                         //     // this.setState({ visible: false });
//                     } catch (error) {
//                         console.log('error is ', error.message);
//                         //     this.setState({ error: 'The server failed to reponse on our request, please try it in another time' });
//                         this.setState({ error : error.message });
//                     } finally {
//                         this.setState({ sendingRequest: false });
//                     }
//                     // const statusStateHook = await fetchUrl(URL, data);
//                     // console.log(statusStateHook);
//                 });
//             });
//         }
//     };

    

//     saveFormRef = formRef => {
//         this.formRef = formRef;
//     };

//     render() {
//         return (
//             <React.Fragment>
//                 <StartSchedulingButton
//                     size="large"
//                     shape="round"
//                     // alwaysbottom={alwaysbottom ? true : undefined}
//                     alwaysbottom={this.props.alwaysbottom ? 1 : 0}
//                     onClick={this.showModal}
//                 >
//                     <strong>Let's Start Scheduling</strong>
//                 </StartSchedulingButton>

//                 {
//                     this.state.visible &&
//                     <PlanningInputForm
//                         wrappedComponentRef={this.saveFormRef}
//                         visible={this.state.visible}
//                         onCancel={this.handleCancel}
//                         onRequest={this.handleRequest}
//                         sendingRequest={this.state.sendingRequest}
//                         error={this.state.error}
//                         statusRequest={this.state.statusRequest}
//                     />
//                 }
//             </React.Fragment>
//         );
//     }
// };

// class SignUpFormBase extends React.Component {

//     // const handleSubmit = e => {
//     //     e.preventDefault();

//     //     props.form.validateFields((err, values) => {
//     //         if (!err) {
//     //             console.log('Received values of form: ', values);
//     //             alert('yes');
//     //             setFieldsValue({
//     //                 firstname: '',
//     //                 lastname: '',
//     //                 email: '',
//     //                 company: ''
//     //             });
//     //         }
//     //     });
//     // };
//     render() {
//         const { 
//             visible, onCancel, onRequest, form, 
//             error, sendingRequest, statusRequest, 
//         } = this.props;
//         const { getFieldDecorator } = form;
//         return (
//             <Modal
//                 title="Get invitation"
//                 visible={visible}
//                 closable
//                 onOk={onRequest}
//                 onCancel={onCancel}
//                 footer={[
//                     <Button key="cancel" onClick={onCancel}>
//                         Cancel
//                     </Button>,
//                     <Button key="request" type="primary" loading={sendingRequest} onClick={onRequest}>
//                         {!!statusRequest ? 'Close' : 'Request'}
//                     </Button>
//                 ]}
//             >
//                 <h4>* All fields are required</h4>
//                 <Form>
//                     <Form.Item {...formItemLayout} label="* First name">
//                         {getFieldDecorator('firstname', {
//                             rules: [{ required: true, message: 'Please input your first name!' }],
//                         })(
//                             <Input
//                                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                 placeholder="First name (*)"
//                                 disabled={sendingRequest}
//                             />,
//                         )}
//                     </Form.Item>
//                     <Form.Item {...formItemLayout} label="* Last name">
//                         {getFieldDecorator('lastname', {
//                             rules: [{ required: true, message: 'Please input your last name!' }],
//                         })(
//                             <Input
//                                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                 placeholder="Last name (*)"
//                                 disabled={sendingRequest}
//                             />,
//                         )}
//                     </Form.Item>
//                     <Form.Item {...formItemLayout} label="* Email">
//                         {getFieldDecorator('email', {
//                             rules: [
//                                 {
//                                     type: 'email',
//                                     message: 'must contain "@" and "."',
//                                 },
//                                 {
//                                     required: true,
//                                     message: 'Please input your E-mail!',
//                                 },
//                             ],
//                         })(
//                             <Input
//                                 prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                 type="email"
//                                 placeholder="Email (*)"
//                                 disabled={sendingRequest}
//                             />
//                         )}
//                     </Form.Item>
//                     <Form.Item {...formItemLayout} label="* Company">
//                         {getFieldDecorator('company', {
//                             rules: [{ required: true, message: 'Please input your company!' }],
//                         })(
//                             <Input
//                                 prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                                 type="text"
//                                 placeholder="Company (*)"
//                                 disabled={sendingRequest}
//                             />,
//                         )}
//                     </Form.Item>
//                 </Form>

//                 {
//                     error &&
//                     <p>{error}</p>
//                 }
//             </Modal>
//         );
//     }
// };

// const PlanningInputForm = Form.create()(SignUpFormBase);

// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
// }