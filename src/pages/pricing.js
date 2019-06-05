import React from 'react';
import Layout from '../components/layout';
import { 
    Card, Col, Row, List, Button,
    Typography,
} from 'antd';
import {
    RowAlignCenter,
} from '../components/styled_components';

export default () => (
    <Layout>
        <PriceComponent />
    </Layout>
);

export const PriceComponent = () => (
    <RowAlignCenter>
        <Typography.Title level={2}>PRICING</Typography.Title>
        <h4>Simple and Transparent Price Model</h4>

        <Row gutter={16}>
            <Col span={8}>
                <PriceCard
                    packageTitle="BASIC"
                    packagePrice="FREE"
                    packagePriceDescription="like in no fee"
                    firstLine="0-9"
                    secondLine="1-5"
                    thirdLine="Shift Planning"
                    fourthLine="Time Registration"
                    fifthLine="Messaging"
                    buttonName="TRY IT NOW"
                />
            </Col>
            <Col span={8}>
                <PriceCard
                    packageTitle="STANDARD"
                    packagePrice="$1"
                    packagePriceDescription="per user/month"
                    firstLine="10-499"
                    secondLine="6-99"
                    thirdLine="Shift Planning"
                    fourthLine="Time Registration"
                    fifthLine="Messaging"
                    buttonName="POPULAR CHOICE"
                />
            </Col>
            <Col span={8}>
                <PriceCard
                    packageTitle="PREMIUM"
                    packagePrice="$2"
                    packagePriceDescription="per user/month"
                    firstLine="500+"
                    secondLine="Unlimited"
                    thirdLine="Unlimited departments"
                    fourthLine="Payroll Export"
                    fifthLine="Custom Plugins"
                    buttonName="GET IN TOUCH"
                />
            </Col>
        </Row>
    </RowAlignCenter>
);

const PriceCard = ({packageTitle, packagePrice, packagePriceDescription, firstLine, secondLine, thirdLine, fourthLine, fifthLine, buttonName}) => {
    const TheTitle = () => (
        <React.Fragment>
            <h1 style={{ color: '#117A65' }}>{packageTitle}</h1>
            <p><span style={{ fontSize: '50pt' }}>{packagePrice}</span> {packagePriceDescription}</p>
        </React.Fragment>
    );
    return (
        <Card 
            title={<TheTitle/>} 
            bordered={false} 
            headStyle={packageTitle === 'STANDARD' ? { backgroundColor: '#08B0A0', color: 'white' } : { backgroundColor: 'black', color: 'white' }}
        >
            <List  
                dataSource={[`${firstLine} employees`, `${secondLine} groups`, thirdLine, fourthLine, fifthLine]}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <br />
            <br />
            <br />
            <Button block size="large" style={packageTitle === 'STANDARD' ? { backgroundColor: '#08B0A0' } : null}>{buttonName}</Button>
            <br />
            <br />
            <Button block type="link">Read more</Button>
        </Card>
    );
};