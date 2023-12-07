import { Layout, Row } from "antd";
import classNames from "classnames";
import { useSelector } from "react-redux";
import Breadcrumbs from "components/cleanui/layout/Breadcrumbs";
import Footer from "components/cleanui/layout/Footer";
import Menu from "components/cleanui/layout/Menu";
import IdleTimer from "components/system/IdleTimer";
import { selectSettings } from "store/settingSlice";
import TopBar from "components/cleanui/layout/TopBar";

const MainLayout = ({ children }) => {
  const {
    isContentMaxWidth,
    isAppMaxWidth,
    isGrayBackground,
    isSquaredBorders,
    isCardShadow,
    isBorderless,
  } = useSelector(selectSettings);

  return (
    <div
      className={classNames({ cui__layout__grayBackground: isGrayBackground })}
    >
      <IdleTimer />
      <Layout
        className={classNames({
          cui__layout__contentMaxWidth: isContentMaxWidth,
          cui__layout__appMaxWidth: isAppMaxWidth,
          cui__layout__grayBackground: isGrayBackground,
          cui__layout__squaredBorders: isSquaredBorders,
          cui__layout__cardsShadow: isCardShadow,
          cui__layout__borderless: isBorderless,
        })}
      >
        {/* <Sidebar /> */}
        {/* <SupportChat /> */}
        <Menu />
        <Layout>
          <Row justify="end">
            <TopBar />
          </Row>
          <Breadcrumbs />
          <Layout.Content style={{ height: "100%", position: "relative" }}>
            <div className="cui__utils__content">{children}</div>
          </Layout.Content>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
