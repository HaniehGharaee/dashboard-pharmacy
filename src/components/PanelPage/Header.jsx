import { Typography } from "antd";

const { Title } = Typography;

const Header = (props) => {
  return (
    <header className="w-full">
      <div>
        <Title level={4} className="!m-0 w-30">
          {props.children || props.title}
        </Title>
        <div className="2md:w-full">{props.extraContent}</div>
      </div>
      <p className="mb-8 text-gray-400">{props.description} </p>
    </header>
  );
};

export default Header;
