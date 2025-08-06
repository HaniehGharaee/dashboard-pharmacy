
import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactECharts from 'echarts-for-react';

const ReactEchartsCustom = React.memo(({ option, ...props }) => {
    useEffect(() => {
        console.log('ReactEchartsCustom run');
    }, []);
    return (
        <Skeleton loading={props.ShowLoading}>
            <ReactECharts
                option={option}
                //style={{ height: '300px', width: '100%' }}
                //theme="my_theme"
                onEvents={(e) => console.log(e)}
                {...props}
            />
        </Skeleton>
    );
});

export default ReactEchartsCustom;