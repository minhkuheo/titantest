import React from 'react';
import Layout from '../components/layout';
import {
    Icon, Col,
} from 'antd';
import { 
    RowAlignCenter, 
    Iframe,
} from '../components/styled_components';

import { LetsSignUpButton } from '../components/SignUp';

export default () => (
    <Layout>
        <RowAlignCenter>
            <h1>We provided: </h1>
            <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Shift Planning</h3>
            <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Time Registration</h3>
            <h3><Icon type="plus-circle" theme="twoTone" twoToneColor="#52c41a" /> Communication</h3>
        </RowAlignCenter>

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
        />

        <LetsSignUpButton alwaysbottom={true}/>
    </Layout>
);

/** ***************************************************************************
 * ****************************************************************************
 * ****************************************************************************/

const FeaturesRowVideo = ({ leftPart, rightPart }) => (
    <RowAlignCenter>
        <Col span={12}>
            {leftPart}
        </Col>
        <Col span={12}>
            {rightPart}
        </Col>
    </RowAlignCenter>
);