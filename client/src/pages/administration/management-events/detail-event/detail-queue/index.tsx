import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Menu,
  Row,
  Tabs,
} from "antd";
import InformationEventCard from "components/administration/EventForm/InformationEventCard";
import ManagementQueues from "components/administration/EventForm/QueueDataTable";
import ManagementEnrollQueues from "components/administration/QueueForm/EnrollQueueDataTable";
import InformationQueueCard from "components/administration/QueueForm/InformationQueueCard";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DetailEvent = () => {
  return (
    <>
      <Helmet title="Chi tiết sự kiện" />
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/event/1">Chi tiết sự kiện</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Chi tiết hàng đợi</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <Col sm={24} md={12} xl={12}>
          <Card title="" className="mt-2">
            <InformationEventCard />
          </Card>
        </Col>
        <Col sm={24} md={12} xl={12}>
          <Card title="" className="mt-2">
            <InformationQueueCard />
          </Card>
        </Col>
      </Row>

      <Divider />

      <Card title="Danh sách người đợi" className="mt-2">
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab="Tất cả" key="1">
            <ManagementEnrollQueues />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đang chờ" key="2">
            <ManagementEnrollQueues />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã xong" key="3">
            <ManagementEnrollQueues />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã hủy" key="4">
            <ManagementEnrollQueues />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </>
  );
};

export default DetailEvent;