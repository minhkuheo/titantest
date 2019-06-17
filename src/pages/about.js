import React from 'react';
import Layout from '../components/layout';
// import styled from 'styled-components';
import { RowAlignCenter, Heading1, Heading2 } from '../components/styled_components';
import {
    // Typography, List, Card
    Row, 
    // Col, 
    // Icon,
    Button,
} from 'antd';

// import TestAvatar from '../images/test_avatar.jpg';

// const Avatar = styled.img`
//     padding: 40px;
// `;

export default () => (
    <Layout>
        <AboutUs />
    </Layout>
);

const AboutUs = () => (
    <React.Fragment>
        <RowAlignCenter>
            {/* <Typography.Title level={3}>GET IN TOUCH</Typography.Title> */}
            <Message />
            <br />
            <br />
            <SomeExtra />
        </RowAlignCenter>
    </React.Fragment>
);

const Message = () => (
    <React.Fragment>
        <Heading1>TitanPlan is a versatile shift planning system</Heading1>
        <Heading2>created and designed to make your shift planning fast and easier</Heading2>
    </React.Fragment>
);

const SomeExtra = () => (
    <Row>
        <Button shape="round" size="large" style={{ backgroundColor: '#E4F3F7' }}>Jobs</Button>{' '}
        <Button shape="round" size="large" style={{ backgroundColor: '#E4F3F7' }}>Who we are</Button>{' '}
    </Row>
);

// const TeamCompany = () => (
//     <RowAlignCenter>
//         <Typography.Title level={2}>Our team</Typography.Title>
//         <List
//             grid={{
//                 gutter: 16,
//                 column: 3
//             }}
//             size="small"
//             dataSource={data}
//             renderItem={item => (
//                 <List.Item>
//                     <Card bordered={false} cover={<Avatar src={item.avatar} alt={item.name} />}>
//                         <Card.Meta title={item.name} description={item.position}/>
//                     </Card>
//                 </List.Item>
//             )}
//         />
//     </RowAlignCenter>
// );

// const data = [
//     {
//         name: 'Jeppe Haugstrup',
//         position: 'System Architect',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Dzung Le',
//         position: 'Design Head',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Benton Colley',
//         position: 'Photography Head',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Floyd Fukuda',
//         position: 'Marketing HOD',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Elena Cully',
//         position: 'Design Head',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Burton Brooke',
//         position: 'Web Technologist',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Ressie Rottman',
//         position: 'Design Head',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Reed Recio',
//         position: 'Photography Head',
//         avatar: TestAvatar
//     },
//     {
//         name: 'Nancee Bluford',
//         position: 'SEO Head',
//         avatar: TestAvatar
//     },
// ];