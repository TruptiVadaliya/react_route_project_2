import footerContact from "../../api/FooterApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerIcon = {
        MdPlace: MdPlace,  // Store the actual component
        IoCallSharp: IoCallSharp,
        TbMailPlus: TbMailPlus,
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {(footerContact || []).map(({ icon, title, details }, index) => {
                    const IconComponent = footerIcon[icon]; // Retrieve the component
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">
                                {IconComponent ? <IconComponent /> : <span className="text-red-500">Invalid Icon</span>}
                            </div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2024, All Rights Reserved
                                <NavLink to="/"> ThapaTechnical</NavLink>
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" target="_blank" rel="noopener noreferrer">
                                        Source Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
