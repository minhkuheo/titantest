import React from 'react';
import Layout from '../components/layout';
import {
    Typography, 
    List,
    Card,
} from 'antd';
import { RowAlignCenter, DefaultButton } from '../components/styled_components';

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
            <br />
            <SeeMore />
        </RowAlignCenter>
    </Layout>
);


const MainMessage = () => (
    <React.Fragment>
        {/* <p>To whom we serve ? Who might need us ? (Work places) Who do we suggest should need us / will need us ?</p>
        <p>Do we have any exceptional case that TitanPlan might fit into ?</p> */}
        <Typography.Title level={3}>TitanPlan - fast and easy shift planning</Typography.Title>
        <p>We use Machine Learning and Big Data analytics to adapt the system to fit your needs</p>  
    </React.Fragment>
);

const Goal = () => (
    <React.Fragment>
        <h4>We cater the following business</h4>
        <br />

        <List
            grid={{ 
                gutter: 48,
                xs: 1,  // phones
                sm: 2,  // tablets
                md: 2,  // desktop
                lg: 3,  // larger desktop
                xl: 5,
                xxl: 5, 
            }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item>
                    <Card 
                        hoverable
                        border={false}
                        cover={<img style={{ maxHeight: '150px' }} alt={item.title} src={item.photo}/>}
                    >
                        <Card.Meta title={item.title}/>
                    </Card>
                </List.Item>
            )}
        />
    </React.Fragment>
);

const SeeMore = () => (
    <DefaultButton size="large" shape="round">See More</DefaultButton>
);

const dataSource = [
    {
        title: 'Offices',
        photo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t31.0-8/11025969_820569861368108_7240984104710050717_o.jpg?_nc_cat=102&_nc_oc=AQms6Mb_QIxHuIhuLbN7yvO_k8cNiqoVVESGUcN6XLnD0CmY7VffMUYzD0xgNoMTAZ0&_nc_ht=scontent.fhan3-1.fna&oh=9104cfc22e39940ee03355cf4d60649a&oe=5D971D8D"
    },
    {
        title: 'Restaurants and cafés',
        photo: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/62140579_10216378839997179_5021123442573836288_o.jpg?_nc_cat=103&_nc_oc=AQlYqPNLDNWxOkYq0-YGQbs2b9mrXIfvZnSjPkED08v3cSkyCLNrygXQhw3eJDI9eWc&_nc_ht=scontent.fhan2-1.fna&oh=e7a3a018c15c89bdc39801a896074a52&oe=5D7B2EC2"
    },
    {
        title: 'Factories',
        photo: "https://live.staticflickr.com/5501/10987405545_2ae197f637_b.jpg"
    },
    {
        title: 'Hotels',
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllkKDy9dSNyH9rb5HHGVDRyC5ATsKc2kKfTYOQuh31y6nfNu_Aw"
    },
    {
        title: 'Craftmen',
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZlXKG3wf82xTt09nFEBZ-v5J6LZE--gNi_EHK2Yv-K7pLEET"
    },
];