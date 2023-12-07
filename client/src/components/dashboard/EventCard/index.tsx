import { EventDto } from "@api/waitingQueue.schemas";
import { Card, Descriptions, Image, Row, Tag } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { serveImage } from "services/utils";
import { FORMAT_DATE_MINUTE } from "services/utils/constants";

export type Props = {
  data: EventDto;
};

const EventCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Card
        className="br-8"
        title={<Link to={`/event/${data?.id}`}>{data?.name}</Link>}
        extra={<Link to={`/event/${data?.id}`}>Xem chi tiết</Link>}
      >
        <Row justify="center">
          <Image
            // width={200}
            height={180}
            src={serveImage(data?.drawImagePath)}
          />
        </Row>

        <hr />
        <Descriptions column={1}>
          <Descriptions.Item label="Thời gian">
            {data?.daily
              ? "Hàng ngày"
              : `Từ ${
                  (data?.from &&
                    moment(data?.from).format(FORMAT_DATE_MINUTE)) ??
                  "..."
                } đến ${
                  (data?.to && moment(data?.to).format(FORMAT_DATE_MINUTE)) ??
                  "..."
                }`}
          </Descriptions.Item>
          <Descriptions.Item label="Địa điểm">{data?.place}</Descriptions.Item>
          <Descriptions.Item label="Mô tả">
            {data?.description}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            {data?.status ? (
              <Tag color="green">Hoạt động</Tag>
            ) : (
              <Tag color="red">Đã đóng</Tag>
            )}
          </Descriptions.Item>
        </Descriptions>
        {/* <Divider />
        <Row justify="space-between">
          <Button
            style={{ color: "red !important" }}
            color="red"
            className="mt-1 ant-btn-danger"
            shape="round"
            icon={<DeleteOutlined />}
          >
            Xóa
          </Button>
          <Button
            type="primary"
            className="mt-1"
            shape="round"
            icon={<EditOutlined />}
          >
            Sửa
          </Button>
        </Row> */}
      </Card>
    </>
  );
};

export default EventCard;
