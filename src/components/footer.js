import React from 'react';
import {
    Row, Col, Icon
} from 'antd';

export default () => (
    <React.Fragment>
        <Row>
            <Col span={8}>
                <h3>HRM</h3>
                <p>Jobs</p>
            </Col>
            <Col span={8}>
                <h3>CRM</h3>
                <p>Marketing</p>
                <p>Customer service</p>

            </Col>
            <Col span={8}>
                <h3>Contact</h3>

                <Row>
                    <Icon type="environment" /> in Denmark
                    <p>
                        Spinderigade 11b, 
                        DK-7100 Vejle, 
                        Denmark
                    </p>

                    <Icon type="environment" /> in Vietnam
                    <p>
                        Ngõ 57 Láng Hạ,
                        Đống Đa, 
                        Hà Nội
                    </p>

                    <Icon type="mail" />
                    <p>
                        alexander.haugstrup@titanplan.com
                    </p>
                    
                    <Icon type="phone" />
                    <p>+45 20 22 44 66</p>
                </Row>
            </Col>
        </Row>

        <Row>
            <p>© Copyright 2019 TitanPlan. All Rights Reserved - Current version: 1.1.1</p>    
        </Row>  
    </React.Fragment>
);