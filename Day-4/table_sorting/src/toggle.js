import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Toggle(){
    return(
        <Link to="/data"><Button type="primary" id="btn">Show Data</Button></Link>
    )
}

export default Toggle;