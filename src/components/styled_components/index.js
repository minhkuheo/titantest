// import React from 'react';
import styled from "styled-components";
import { 
    Row,
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