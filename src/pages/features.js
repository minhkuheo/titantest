import React from 'react';
import Layout from '../components/layout';
import {
    Col,
    Row,
    Card,
} from 'antd';
import { 
    RowAlignCenter, 
    // Iframe,
    FeatureBoxOutline,
    BigH1,
} from '../components/styled_components';

import LetsSignUpButton from '../components/signup';
import ShiftPlanningIcon from '../images/ICON_Shift Planning.svg';
import CalenderIcon from '../images/ICON_Calender.svg';
// import LocationIcon from '../images/ICON_Location.svg';
import TimeRegistrationIcon from '../images/ICON_Time Registration.svg';

export default () => (
    <Layout>
        <section className="titan-header">
            <BigH1>We're right on schedule</BigH1>
            <h4 className="ant-typography">Learn how TitanPlan is quickly becoming the go-to-solution</h4>
        </section>

        <Row>
            <section className="featureBoxMobile">
                <Col span={10} offset={14} className="featureBoxMobileCol">
                    <FeatureBoxOutline 
                        title="FREE for unlimited users"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        title="Human Resources"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        title="Employee Management"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                </Col>
            </section>
        </Row>

        <Row>
            <section className="featureBoxLaptop">
                <Col span={10} offset={2}>
                    <FeatureBoxOutline 
                        title="Fairness"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        title="Collaboration"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                </Col>
            </section>
        </Row>

        <RowAlignCenter>
            <h1>KEY FEATURES</h1>
            <h4>Spend LESS time Organising</h4>
            <h4>- and MORE time Developing your Business</h4>
            <Row gutter={48}>
                <Col span={8}>
                    <Card
                        border={false}
                        cover={<img alt="templates" src={ShiftPlanningIcon} style={{ width:'auto', height:'64px'}}/>}
                    >
                        <Card.Meta title="Templates" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        border={false}
                        cover={<img alt="timesheet" src={TimeRegistrationIcon} style={{ width:'auto', height:'64px'}}/>}
                    >
                        <Card.Meta title="Timesheets" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        border={false}
                        cover={<img alt="vacation" src={CalenderIcon} style={{ width:'auto', height:'64px'}}/>}
                    >
                        <Card.Meta title="Vacation" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"/>
                    </Card>
                </Col>
            </Row>
        </RowAlignCenter>

        {/* <FeaturesRowVideo
            leftPart={<Iframe title="titanplandanish" width="460" height="255" src="https://www.youtube.com/embed/CHXfyO5Q5YY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>}
            rightPart={
                <React.Fragment>
                    <h4>Shift Planning</h4>
                    <ul>
                        <li>Key point 1</li>
                        <li>Key point 2</li>
                        <li>Key point 3</li>
                    </ul>
                </React.Fragment>
            }
        />

        <FeaturesRowVideo
            leftPart={
                <React.Fragment>
                    <h4>Shift Planning</h4>
                    <ul>
                        <li>Key point 1</li>
                        <li>Key point 2</li>
                        <li>Key point 3</li>
                    </ul>
                </React.Fragment>
            }
            rightPart={<Iframe title="titanplandanish" width="460" height="255" src="https://www.youtube.com/embed/CHXfyO5Q5YY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>}
        />

        <FeaturesRowVideo
            leftPart={<Iframe title="titanplandanish" width="460" height="255" src="https://www.youtube.com/embed/CHXfyO5Q5YY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>}
            rightPart={
                <React.Fragment>
                    <h4>Shift Planning</h4>
                    <ul>
                        <li>Key point 1</li>
                        <li>Key point 2</li>
                        <li>Key point 3</li>
                    </ul>
                </React.Fragment>
            }
        /> */}

        <LetsSignUpButton alwaysbottom={true}/>
    </Layout>
);

/** ***************************************************************************
 * ****************************************************************************
 * ****************************************************************************/

// const FeaturesRowVideo = ({ leftPart, rightPart }) => (
//     <RowAlignCenter>
//         <Col span={12}>
//             {leftPart}
//         </Col>
//         <Col span={12}>
//             {rightPart}
//         </Col>
//     </RowAlignCenter>
// );