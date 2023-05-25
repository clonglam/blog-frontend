import { Link } from "react-router-dom"

import FooterTitle from "./FooterTitle"
import MailChainForm from "./MailChainForm"
import SocialMedia from "./SocialMedia"

const Footer = () => {
    return (
        <footer>
            {footerSection.map(({ section, children }) => (
                <div key={section} className="footer-section">
                    <FooterTitle>{section}</FooterTitle>

                    <div className="footer-menu">
                        {children.map(({ label, href }, index) => (
                            <Link
                                className="menu-item"
                                to={href}
                                key={`${label}_${index}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <div>
                <FooterTitle>Need Help</FooterTitle>
            </div>

            <div className="footer-right">
                <MailChainForm />
                <SocialMedia />
            </div>
        </footer>
    )
}

const footerSection = [
    {
        section: "Customer Service",
        children: [
            {
                label: "Free shipping + Returns",
                href: "",
            },
            {
                label: "Start a Return",
                href: "",
            },
            {
                label: "Return Policy",
                href: "",
            },
            {
                label: "FAQS",
                href: "",
            },
            {
                label: "Contact Us",
                href: "",
            },
        ],
    },
    {
        section: "About Us",
        children: [
            {
                label: "About Hugo Lam",
                href: "",
            },
            {
                label: "Journal",
                href: "",
            },
            {
                label: "Testimonials",
                href: "",
            },
        ],
    },
]
export default Footer
