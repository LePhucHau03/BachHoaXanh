

import { memo, useState } from "react";
import "./style.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import {formatter} from "utils/fomater";
import { IoCartOutline } from "react-icons/io5";
import { ROUTERS } from "utils/router";
import { BsList } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState ([
    {
        name: "Trang chủ",
        path: ROUTERS.USER.HOME,
    },
    {
        name: "Cửa hàng",
        path: ROUTERS.USER.PRODUCTS,
    },
    {
        name: "Sản Phẩm",
        path: "",
        isShowSubmenu: false,
        child: [
            {
                name: "Thịt",
                path: "",
            },
            {
                name: "Rau củ",
                path: "",
            },
            {
                name: "Thức ăn nhanh",
                path: "",
            },
        ],
    },
    {
        name: "Bài viết",
        path: "",
    },
    {
        name: "Liên hệ",
        path: "",
    },
]);

    return (
        <>
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                            <CgMail />
                                lephuchauwork@gmail.com
                            </li>
                            <li>
                                FreeShip đơn từ {formatter(200000)}
                            </li>
                        </ul>
                        
                        
                        </div>


                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebookSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <CiInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <CiLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaGoogle />
                                </Link>
                            </li>


                            <li>
                                <Link to={""}>
                                <RiAccountCircleFill />
                                </Link>
                                <span>
                                    Đăng nhập
                                </span>
                            </li>
                        </ul>
                        </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
        <div className="row">
            <div className="col-xl-3">
                <div className="header_logo">
                    <h1>Bách hoá xanh</h1>
                </div>
            </div>


            <div className="col-xl-6">
                <nav className="header_menu">
                    <ul>
                    {/* Gọi menu từ trong biến useState */}
                        {menus?.map((menu, menuKey) => (
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menu?.path}>{menu?.name}</Link>
                                    {/* Set cho chữ sản phẩm có dropdown */}
                                    {menu.child && (
                                        <ul className="header_menu_dropdown">
                                            {menu.child.map((childItem, childKey) => (
                                                <li key={`${menuKey}-${childKey}`}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                </nav>


            </div>


            <div className="col-xl-3">
                <div className="header_cart">
                    <div className="header_cart_price">
                        <span>{formatter(1500000)}</span>
                    </div>

                    <ul>
                        <li>
                           <Link to="#">
                                <IoCartOutline />
                                <span>5</span>
                           </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>

        <div className="container">
            <div className="row hero_categories_container">
                <div className="col-lg-3 hero_categories">
                    <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                        <BsList />
                        Danh sách sản phẩm
                    </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>Thịt tươi</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Rau củ</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Nước trái cây</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Trái cây</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Hải sản</Link>
                            </li>
                    </ul>
                </div>
                <div className="col-lg-9 hero_search_container">
                    <div className="hero_search">
                        <div className="hero_search_form">
                            <form>
                                <input type="text" name="" value="" placeholder="Bạn đang tìm gì?" />
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>

                        <div className="hero_search_phone">
                            <div className="hero_search_phone_icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="hero_search_phone_text">
                                <p>0866-696-753</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero_item">
                        <div className="hero_text">
                            <span>Trái Cây tươi</span>
                            <h2>Rau quả <br/> Sạch 100%</h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to="" className="primary-btn">Mua ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
};

export default memo(Header);