import "./Header.css";
import phoneIcon from "../../../images/phone-icon.svg"
import temporaryLogo from "../../../images/logo-yomi.jpg"
export function Header(): JSX.Element {

    const handlePhoneClick = () => {
        window.location.href = "tel:0504445632"; // Replace with your phone number
    };


    return (
        <div className="Header">
            <div className="upper-line"></div>

            <div className="lower-line">

                <button className="phone-btn"  onClick={handlePhoneClick}>
                    <p className="phone-number">0504445632</p>
                    <div className="phone-icon-container">
                        <img src={phoneIcon} className="phone-icon" alt="" />
                    </div>
                </button>

                <div className="logo-container">
                    <img src={temporaryLogo} alt="" />
                </div>

            </div>
        </div>
    );
}
