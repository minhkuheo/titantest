import React from 'react';
import Layout from '../components/layout';
import {
    Typography, 
    List, 
    Button,
} from 'antd';
import { RowAlignCenter } from '../components/styled_components';

// import styled from 'styled-components';

// const BB = styled(Button)`
//     background-color: red;
//     ${props => props.lala === true && `
//         color: white
//     `};
// `;
// const MyB = (props) => {
//     console.log(`[lala of ${props.c} is ]`, props.lala);
    
//     return (<BB {...props}>Hehe Button</BB>);
// }
// const AA = () => (<MyB lala c='aa'/>);
// const CC = () => (<MyB c='cc'/>);

export default () => (
    <Layout>
        <RowAlignCenter>
            <MainMessage />
            <Goal />
            <SeeMore />
        </RowAlignCenter>
    </Layout>
);


const MainMessage = () => (
    <React.Fragment>
        {/* <p>To whom we serve ? Who might need us ? (Work places) Who do we suggest should need us / will need us ?</p>
        <p>Do we have any exceptional case that TitanPlan might fit into ?</p> */}
        <Typography.Title level={3}>TitanPlan - fast and easy shift planning</Typography.Title>
        <p>Our service is to help you and your colleagues in make shift planning, do better communication and manage collaboration</p>  
    </React.Fragment>
);

const Goal = () => (
    <React.Fragment>
        <h4>We cater the following business</h4>
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item>
                    {item.title}
                </List.Item>
            )}
        >

        </List>
    </React.Fragment>
);

const SeeMore = () => (
    <Button size="large" shape="round">See More</Button>
);

const dataSource = [
    {
        title: 'Offices'
    },
    {
        title: 'Factories'
    },
    {
        title: 'Craftmen'
    },
    {
        title: 'Restaurants and cafés'
    },
    {
        title: 'Hotels'
    },
];