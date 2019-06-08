import React from 'react';
import styled from "styled-components";
import { 
    Row, 
    // Button
} from 'antd';

export const BasicLandingPageRow = styled(Row)`
    margin: 20px 0px 70px 0px;
    padding: 20px;
`;

export const RowAlignCenter = styled(BasicLandingPageRow)`
    text-align: center;
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
    overflow: hidden;
    padding-top: 56.25%;
`;

const IframeBase = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
`;

export const Iframe = (props) => (
    <IframeWrapBase>
        <IframeBase {...props} />
    </IframeWrapBase>
);