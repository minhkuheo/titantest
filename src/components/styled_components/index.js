import React from 'react';
import styled from "styled-components";
import { 
    Row, Col,
    Button,
} from 'antd';
import PlusSignBig from '../../images/plusSignBig.svg';
export const BigH1 = styled.h1`
    color: #fff;
    font-weight: 300;
    line-height: 1.3;
    margin: 0;
    font-size: 72px;
    ${props => props.color && `
        color: ${props.color}
    `};
`;

export const BasicLandingPageRow = styled(Row)`
    margin: 20px 0px 70px 0px;
    padding: 20px;
`;

export const RowAlignCenter = styled(BasicLandingPageRow)`
    text-align: center;
`;
export const RowAlignRight = styled(BasicLandingPageRow)`
    text-align: right;
`;

export const RowGreen = styled(RowAlignCenter)`
    color: white;
    background-color: #08B0A0; 
`;

export const RowSmokeBlue = styled(RowAlignCenter)`
    background-color: #E4F3F7;
`;

const IframeWrapBase = styled.div`
    position: relative;
    // overflow: hidden;
    padding-top: 56.25%;
`;

const IframeBase = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
    border: 0;
    margin-left: 40px;
`;

export const Iframe = (props) => (
    <IframeWrapBase>
        <IframeBase {...props} />
    </IframeWrapBase>
);

export const DefaultButton = styled(Button)`
    background-color: #08B0A0;
    color: white;
`;

/**
 * The "Let's Start Scheduling" button on the Landing page and Features page 
 */
export const StartSchedulingButton = styled(DefaultButton)`
    ${props => props.alwaysbottom && `
        position: fixed; 
        z-index: 2;
        bottom: 50px; 
        right: 40px;
    `};
`;

/**
 * 
 */
export const FeatureBoxOutline = ({title, paragraph}) => (
    <Row>
        <Col span={2}>
            <img src={PlusSignBig} alt="plusbig13" style={{ width:'34px' }}/>
        </Col>
        <Col span={20}>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </Col>
    </Row>
);