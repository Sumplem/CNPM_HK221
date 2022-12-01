import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import messageIcon from "../../assets/icons/message.png";
import ringIcon from "../../assets/icons/ring.png";
import avatar from "../../assets/icons/avatar.png";
import searchIcon from "../../assets/icons/search.png";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <Row>
          <Col lg={8}>
            <ul className={style.headerList}>
              <li>
                <div className={style.headerListLogo}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <Link className={style.headerListLink}>Trang chủ</Link>
              </li>
              <li>
                <Link className={style.headerListLink}>Trang của tôi</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul className={style.headerListIcon}>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={searchIcon}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={ringIcon}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={messageIcon}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <Dropdown>
                <Dropdown.Toggle
                  as="div"
                  value="transparent"
                  id="dropdown-basic-button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      marginRight: "3px",
                    }}
                  >
                    <img src={avatar} alt="Icon" />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={style.menuDropdown}>
                  <Dropdown.Item href="#">Thông tin cá nhân</Dropdown.Item>
                  <Dropdown.Item href="#">Chat</Dropdown.Item>
                  <Dropdown.Item href="#">Thông báo</Dropdown.Item>
                  <Dropdown.Item href="#">Công việc của tôi</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
