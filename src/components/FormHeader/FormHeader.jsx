/* eslint-disable object-curly-newline,react/prop-types */
import React from 'react'
import { Button, Form, Input, Row } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const FormHeader = ({ submitHandler, inputHandler, input }) => (
  <Row type="flex" justify="center" align="middle" style={{ minHeight: '10vh' }}>
    <Form layout="inline" onFinish={submitHandler}>
      <Form.Item>
        <Input
          placeholder="Введите название города..."
          style={{ width: 300 }}
          value={input}
          onChange={inputHandler}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
          Найти
        </Button>
      </Form.Item>
    </Form>
  </Row>
)

export default FormHeader
