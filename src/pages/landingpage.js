import React from 'react';
import {
    Row, Col,
    Typography,
    // Tooltip
    Icon,
} from 'antd';
import {
    BasicLandingPageRow,
    RowAlignCenter,
    FeatureBoxOutline,
    RowGreen,
    RowSmokeBlue,
    Iframe,
    Title, Heading1, Heading2,
    GetAppButton,
    OptimiseItem,
} from "../components/styled_components";
import { PriceComponent } from "./pricing";
import LetsSignUpButton from '../components/signup';
import googlePlayImg from '../images/google-play-badge.svg';
import appStoreImg from '../images/download-on-the-app-store-apple.svg';

import ShiftPlanningIcon from '../images/ICON_Shift Planning.svg';
import CalenderIcon from '../images/ICON_Calender.svg';
import LocationIcon from '../images/ICON_Location.svg';
import MessagingIcon from '../images/ICON_Messaging.svg';
import StatisticsIcon from '../images/ICON_Statistics.svg';
import TimeRegistrationIcon from '../images/ICON_Time Registration.svg';
import Phone from '../images/phone.svg';
import Mail from '../images/mail icon.svg';
import Location from '../images/location.svg';

const NewStatisticsIcon = () => (
    <React.Fragment>
        <img src={StatisticsIcon} alt="statstic" />
        <div className="ribbon">
            <p>NEW</p>
        </div>
    </React.Fragment>
);

/** *****************************************************************
 *                                                                  *
 *                          MAIN COMPONENT                          *
 *                                                                  *
 * ******************************************************************/
export default () => (
    <React.Fragment>
        <MainMessage />

        <RowAlignCenter>
            <LetsSignUpButton />
        </RowAlignCenter>

        <Row gutter={16}>
            <Col span={12}>
                <Iframe title="titanplandanish" src="https://www.youtube.com/embed/CHXfyO5Q5YY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            </Col>
            <Col span={12}>
                <Heading2>Why use TITANPLAN?</Heading2>
                <p>Spend 90 seconds getting to know us</p>
                
                <h3><Icon type="plus-circle" spin={true} style={{ color:'#08B0A0', fontSize:'24px' }}/> Shift Planning</h3>
                <h3><Icon type="plus-circle" spin={true} style={{ color:'#08B0A0', fontSize:'24px' }}/> Time Registration</h3>
                <h3><Icon type="plus-circle" spin={true} style={{ color:'#08B0A0', fontSize:'24px' }}/> Communication</h3>
            </Col>
        </Row>

        <RowAlignCenter>
            <Heading1 color="#48AFCB">OPTIMISE YOUR BUSINESS</Heading1>
            <Row gutter={32}>
                <OptimiseItem
                    optimiseIcon={<img src={ShiftPlanningIcon} alt="shiftplanning"/>}
                    optimiseTitle='Shift Planning'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<img src={TimeRegistrationIcon} alt="timeregistration"/>}
                    optimiseTitle='Time Registration'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<img src={MessagingIcon} alt="messaging"/>}
                    optimiseTitle='Messaging'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />

            </Row>
            <br />
            <Row gutter={32}>
                <OptimiseItem
                    optimiseIcon={<img src={CalenderIcon} alt="calender"/>}
                    optimiseTitle='Calendar Integration'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<img src={LocationIcon} alt="location"/>}
                    optimiseTitle='Smart Location'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
                <OptimiseItem
                    optimiseIcon={<NewStatisticsIcon />}
                    optimiseTitle='Statistics'
                    optimiseDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                />
            </Row>
        </RowAlignCenter>

        <RowGreen>
            <Title><strong>HUJAMBO! Chào bạn</strong></Title>
            <Heading2 color="#fff">Being low cost and highly customisable, including crowd-sourced translation</Heading2>
            <Heading2 color="#fff">TITANPLAN is the go-to workforce planner for Asia and Africa.</Heading2>
            <br />
            <p>(and YES, we are available in Vietnamese and Swahili)</p>
        </RowGreen>

        <Row>
            <RowAlignCenter>
                <Heading1 color='#48AFCB'>FREE UP TO 40% OF YOUR TIME</Heading1>
                <h3>Once you fully integrate TITANPLAN, you will be</h3>
                <h3>surprised how much more time you have to develop your business</h3>
            </RowAlignCenter>
            <section className="featuresBox">
                <Col span={10} offset={14} className="featuresBoxCol">
                    <FeatureBoxOutline 
                        title="Let colleagues swap shifts"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />
                    <FeatureBoxOutline 
                        title="More data - less questions"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
                    />  
                </Col>
            </section>
        </Row>

        <div style={{ backgroundColor: '#B2FCFE' }}>
            <PriceComponent />
        </div>

        <RowSmokeBlue>
            <Typography.Title level={2}>GET ORGANISED</Typography.Title>
            <Typography.Title level={2}>DOWNLOAD OUR FREE APP TODAY</Typography.Title>

            <BasicLandingPageRow>
                <GetAppButton htmlType="button" >
                    <img src={appStoreImg} alt="AppStore" />
                </GetAppButton>
                <GetAppButton htmlType="button">
                    <img src={googlePlayImg} alt="GooglePlay" />
                </GetAppButton>
            </BasicLandingPageRow>

            <p>Get the TITANPLAN app for iOS or Android for FREE here!</p>
            <p>All you need for scheduling, communication, shift planning and time registration</p>
        </RowSmokeBlue>

        <RowAlignCenter style={{ backgroundColor:'white' }}>
            <Heading1 color="#48AFCB">GET IN TOUCH</Heading1>
            <section className="get-in-touch">
                <div className="get-in-touch-infoBox">
                    <Row>
                        <Col span={8} >
                            <img src={Location} alt="location" />
                            <p style={{ display:'block' }}>Spinderigade 11b DK-7100 Vejle Denmark</p>
                        </Col>
                        <Col span={8}>
                            <img src={Mail} alt="mail" />
                            <p style={{ display:'block' }}>alexander.haugstrup@titanplan.com</p>
                        </Col>
                        <Col span={8}>
                            <img src={Phone} alt="phone" />
                            <p style={{ display:'block' }}>+45 20 22 44 66</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </RowAlignCenter>
    </React.Fragment>
);

/** *****************************************************************
 *                                                                  *
 *               SUB COMPONENTS + HELPER FUNCTIONS                  *
 *                                                                  *
 * ******************************************************************/

const MainMessage = () => (
    <React.Fragment>
        <section className="titan-header">
            <Title>Employee Plan - Made better!</Title>
            <h4 className="ant-typography">Say hello to TitanPlan - a truly versatile shiftplanning solution</h4>
            <div className="heroImg">
                <div className="ribbon">
                    <strong>FREE</strong> for unlimited users
                </div>
            </div>
        </section>
    </React.Fragment>
);