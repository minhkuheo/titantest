import React from 'react';
import Layout from '../components/layout';
import {
    Col,
    Row,
} from 'antd';
import { 
    RowAlignCenter, 
    OptimiseItem,
    FeatureBoxOutline,
    Title,
    Heading1,
} from '../components/styled_components';

import LetsSignUpButton from '../components/signup';
import ShiftPlanningIcon from '../images/ICON_Shift Planning.svg';
import CalenderIcon from '../images/ICON_Calender.svg';
// import LocationIcon from '../images/ICON_Location.svg';
import TimeRegistrationIcon from '../images/ICON_Time Registration.svg';

export default () => (
    <Layout>
        <section className="titan-header">
            <Title>We're right on schedule</Title>
            <h4 className="ant-typography">Learn how TitanPlan is quickly becoming the go-to-solution</h4>
        </section>

        <Row>
            <section className="featureBoxMobile">
                <Col span={10} offset={14} className="featureBoxMobileCol">
                    <FeatureBoxOutline 
                        iconName="plus-circle"
                        iconColor="#08B0A0"
                        iconSize="32px"
                        title="FREE for unlimited users"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        iconName="plus-circle"
                        iconColor="#08B0A0"
                        iconSize="32px"
                        title="Human Resources"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        iconName="plus-circle"
                        iconColor="#08B0A0"
                        iconSize="32px"
                        title="Employee Management"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                </Col>
            </section>
        </Row>

        <Row>
            <section className="featureBoxLaptop">
                <Col span={10} offset={2} className="featureBoxLaptopCol">
                    <FeatureBoxOutline 
                        iconName="plus-circle"
                        iconColor="#fff"
                        iconSize="32px"
                        title="Fairness"
                        titleColor="#fff"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        iconName="plus-circle"
                        iconColor="#fff"
                        iconSize="32px"
                        title="Collaboration"
                        titleColor="#fff"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                </Col>
            </section>
        </Row>

        <RowAlignCenter>
            <Heading1 color="#48AFCB">KEY FEATURES</Heading1>
            <h3>Spend LESS time Organising</h3>
            <h3>- and MORE time Developing your Business</h3>
            <br />
            <Row gutter={48}>
                <OptimiseItem
                    optimiseIcon={<img alt="templates" src={ShiftPlanningIcon} />}
                    optimiseTitle='Templates'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<img alt="timesheet" src={TimeRegistrationIcon} />}
                    optimiseTitle='Timesheets'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<img alt="vacation" src={CalenderIcon} />}
                    optimiseTitle='Vacation'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
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