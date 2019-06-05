import React from 'react';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <Goal />
    </Layout>
);

const Goal = () => (
    <div>
        <p>To whom we serve ? Who might need us ? (Work places) Who do we suggest should need us / will need us ?</p>
        <p>Do we have any exceptional case that TitanPlan might fit into ?</p>
    </div>
);