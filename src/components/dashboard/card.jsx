import { Card, Col, Row } from "antd";
import "./card.less";

const CardsDashboatds = () => {
  const colProps = {
    xs: 12,
    sm: 24,
    md: 24,
    lg: 16,
    xl: 24,
  };
  return (
    <>
      <Row
        gutter={[8, 8]}
        justify="center"
        className="md:grid gap-4 md:grid-cols-4 mx-2"
      >
        <Col {...colProps}>
          <Card
            title="داروهای منقضی شده"
            bordered={false}
            extra={<div className="square1 mb-3"></div>}
          >
            <div
              style={{ textAlign: "left", color: "blue", marginTop: "auto" }}
            >
              نمایش بیشتر
            </div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card
            title="سهام دارو"
            bordered={false}
            extra={<div className="square2 mb-3"></div>}
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card
            title="کل داروها"
            bordered={false}
            extra={<div className="square3 mb-3"></div>}
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card
            title="کل فروش"
            bordered={false}
            extra={<div className="square4 mb-3"></div>}
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CardsDashboatds;
