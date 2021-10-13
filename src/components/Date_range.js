    import React from 'react';
    //Bootstrap and jQuery libraries
    import 'bootstrap/dist/css/bootstrap.min.css';
    //Form, DatePicker, Button Modules
    import { Form, DatePicker, Button } from 'antd';
    import "antd/dist/antd.css";
    // import App from './Date_range'
    class Apps extends React.Component {
    
    render(){
        const { RangePicker } = DatePicker;
        const formItemLayout = {
            labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
            },
            wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
            },
        };
        const config = {
            rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
            ],
        };
        const rangeConfig = {
        rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
        ],
    };
        const TimeRelatedForm = () => {
            const onFinish = (fieldsValue) => {
            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            
            const values = {
                ...fieldsValue,
                'date_picker': fieldsValue['date-picker'].format('DD-MM-YY'),
                
            
                'range-picker': [rangeValue[0].format('DD'), rangeValue[1].format('DD')],
            
            };
            //Getting input values
            console.log('Received values of form: ', values);
            };
    return (
        <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
        <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
        </Form.Item>
        
        
        <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
            <RangePicker />
        </Form.Item>
        
        <Form.Item
            wrapperCol={{
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
            }}
        >
            <Button type="primary" htmlType="submit"> submit
            </Button>
        </Form.Item>
        </Form>
    );
    };
    return (
        <div className="MainDiv">
        <div className="jumbotron text-center">
            <h3>Date Range picker</h3>
            
        </div>
        
        <div className="container">
            
        <TimeRelatedForm />
            </div>
        </div>
    );
    }
    }
    export default Apps;