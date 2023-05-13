import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import React from "react";

const StatisticData: React.FC = () => (
  <>
    <Col className="p-2" md={12} lg={12} xl={12} xxl={12} xs={24} sm={12}>
      <Card className="br-8">
        <Statistic
          title="Thời gian đợi trung bình"
          value={11.28}
          precision={2}
          valueStyle={{ color: "#3f8600" }}
          prefix={<ArrowUpOutlined />}
          suffix="/lượt"
        />
      </Card>
    </Col>
    <Col md={12} lg={12} xl={12} xxl={12} xs={24} sm={12} className="p-2">
      <Card className="br-8">
        <Statistic
          title="Thời gian phục vụ trung bình"
          value={9.3}
          precision={2}
          valueStyle={{ color: "#cf1322" }}
          prefix={<ArrowDownOutlined />}
          suffix="/lượt"
        />
      </Card>
    </Col>
  </>
);

export default StatisticData;
