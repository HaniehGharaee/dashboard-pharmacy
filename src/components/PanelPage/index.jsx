import { Helmet } from "react-helmet";
import PanelHeader from "./Header";

const PanelPage = (props) => (
  <div>
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>

    <div className="mx-auto my-4 max-w-7xl !px-10">
      <PanelHeader
        description={props.description}
        extraContent={props.extraContent}
      >
        <div className="flex items-center">
          {props.icon}
          <span className="m-1">{props.visualTitle || props.title}</span>
        </div>
      </PanelHeader>
      {props.children}
    </div>
  </div>
);
export default PanelPage;
