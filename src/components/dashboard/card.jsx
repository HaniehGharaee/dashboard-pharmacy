import { Card, Col, Row } from "antd";
import "./card.less";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { drugsIcon } from "src/assets/icons/index";
import { instockIcon } from "src/assets/icons/index";

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
            bordered={true}
            className="border-white-900 rounded-lg"
            extra={
              <div className="square1 mb-3 flex items-center justify-center">
                <CalendarMonthIcon sx={{ fontSize: 35 }} />
              </div>
            }
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
            bordered={true}
            className="border-white-900 rounded-lg"
            extra={
              <div className="square2 mb-3 flex items-center justify-center">
                <img src={instockIcon} alt="stock Icon" className="h-10 w-10" />
              </div>
            }
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card
            title="کل داروها"
            bordered={true}
            className="border-white-900 rounded-lg"
            extra={
              <div className="square3 mb-3 flex items-center justify-center">
                <img src={drugsIcon} alt="Drugs Icon" className="h-10 w-10" />
              </div>
            }
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card
            title="کل فروش"
            bordered={true}
            className="border-white-900 rounded-lg"
            extra={
              <div className="square4 mb-3 flex items-center justify-center">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 35 }} />
              </div>
            }
          >
            <div style={{ textAlign: "left", color: "blue" }}>نمایش بیشتر</div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CardsDashboatds;
