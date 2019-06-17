import React from 'react';
import styled from "styled-components";
import { 
    Row, Col,
    Button, Icon
} from 'antd';

/** **********************************************
 *  **********************************************
 ** **********************************************/

// export const Title = styled.h1`
//     color: #fff;
//     font-weight: 300;
//     line-height: 1.3;
//     margin: 0;
//     font-size: 72px;
//     ${props => props.color && `
//         color: ${props.color}
//     `};
// `;
export const Title = styled.h1`
    color: #fff;
    font-weight: 300;
    line-height: 1.3;
    margin: 0;
    font-size: 72px;
    color: ${props => props.color ? props.color : '#fff'};
`;

export const Heading1 = styled.h1`
    line-height: 1.3;
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: 400;
    ${props => props.color && `
        color: ${props.color}
    `};
`;

export const Heading2 = styled.h1`
    line-height: 1.3;
    margin: 0 0 20px 0;
    font-size: 24px;
    color: ${props => props.color ? props.color : '#000'};
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

// Responsive iframe
export const Iframe = (props) => (
    <IframeWrapBase>
        <IframeBase {...props} />
    </IframeWrapBase>
);

/**
 * The button which only has green background and white color
 */
export const DefaultButton = styled(Button)`
    background-color: #08B0A0;
    color: white;
`;

/**
 * Styled Buttons: "Appstore button" and "Google Play button"
 * The 2 buttons that will redirect the user to the corresponding store.
 */
export const GetAppButton = styled(Button)`
    padding: 0;
    border: none;
    background: none;
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
 * Used in fx. features.js file. 
 * Comprise:
 *      -----------------------------------------
 *      |               |   title             	|
 *      |     photo     |   paragraph           |
 *      |               |                       |
 *      ----------------------------------------- 
 */
export const FeatureBoxOutline = ({iconName, title, titleColor=undefined, paragraph, iconColor, iconSize }) => (
    <Row>
        <Col span={2}>
            {/* <img src={PlusSignBig} alt="plusbig13" style={{ width:'34px' }}/> */}
            <Icon type={iconName} spin={true} style={{ color:iconColor, fontSize:iconSize }} />
        </Col>
        <Col span={20}>
            <Heading2 color={titleColor}>{title}</Heading2>
            <p>{paragraph}</p>
        </Col>
    </Row>
);

/**
 * Used in fx landingpage.js
 * Comprise:
 *      -----------------------------
 *      |                           |
 *      |           Photo           |
 *      |                           |
 *      -----------------------------
 *      |           TITLE           |
 *      |         Paragraph         |
 *      |        (something)        |
 *      |                           |
 *      -----------------------------
 * @param {optimiseIcon} DOMobject  an img component
 * @param {optimiseTitle} string    
 * @param {optimiseDescription} string  
 */
export const OptimiseItem = ({ optimiseIcon, optimiseTitle, optimiseDescription }) => (
    <Col span={8}>
        <div className="featureIcon">
            {optimiseIcon}
        </div>
        <Heading2>{optimiseTitle}</Heading2>
        <p>{optimiseDescription}</p>
    </Col>
);