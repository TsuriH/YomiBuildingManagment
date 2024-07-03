import "./Hero.css";
import vMark from "../../../images/vmark.svg"
import buildingHero from "../../../images/buildinghero.png"
import leftChevron from "../../../images/leftchevron.svg"
import heroWave from "../../../images/herowave.svg"
import binIcon from "../../../images/bin-icon.svg"
import maintenancesIcon from "../../../images/maintenence-icon.svg"
import washingIcon from "../../../images/washing-icon.svg"
import windowsIcon from "../../../images/windows-icon.svg"
import safetyIcon from "../../../images/safety-icon.svg"
import polishIcon from "../../../images/polish-icon.svg"
import paintingIcon from "../../../images/painting-icon.svg"
import inventoryIcon from "../../../images/inventory-icon.svg"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ReactTagManager } from "react-gtm-ts";



export function Hero(): JSX.Element {

    const { handleSubmit } = useForm();
    const form = useRef<HTMLFormElement | null>(null)
    const [instantFormClosed, setInstantFormClosed] = useState(true)
    const [successMessage, setSuccessMessage] = useState(false);

    const sendEmail = (e: any) => {
        if (form.current) {
            emailjs.sendForm('yumi2024', 'yumi_landing_page', form.current, {
                publicKey: 'hj5e7F6IY_Pgmt-AY',
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        console.log("message sent")
                        form.current?.reset()
                        setSuccessMessage(true);
                        setTimeout(() => {
                            setInstantFormClosed(true)
                            setSuccessMessage(false)
                        }, 3000);
                        ReactTagManager.action({
                            event: 'forom_sumbmission_success',
                            formName: 'contact_form'

                        })
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    }


    const handlePhoneClick = () => {
        window.location.href = "tel:0504445632";
    };




    const handleWhatsAppClick = () => {
        const phoneNumber = "9720504445632";
        const message = "שלום חברת yumi אני מתעניין בשירות שלכם ";
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    const toggleInstantForm = () => {
        setInstantFormClosed(!instantFormClosed)
    }


    return (
        <div className="Hero">

            <div className="hero-content">
                <div className="overlay"></div>

                <div className="hero-image">
                    <img src={buildingHero} alt="" />
                </div>

                <div className="hero-copy">
                    <p className="first-sen">הבחירה המקצועית שלך לשירותי ניהול ואחזקה</p>
                    <h2>ניהול ואחזקת מבנים בסטנדרט שלא הכרתם!</h2>
                    <p className="third-sen">חברת <span>YUMI</span>  היא חברה מנוסה המתמחה בתחזוקה ותפעול של בניינים למגורים ממגוון סוגים. החברה מספקת שירות מקצועי ויעיל, הכולל מענה כולל לכל צרכיהם של הדיירים. הצטרפו אלינו ותהנו מהשירות המעולה שלנו, ותוכלו לחוות את ההבדל המשמעותי בניהול הבניין שלכם כבר כיום!</p>

                    <div className="three-points">
                        <div className="first-point point">
                            <img src={vMark} alt="" className="v-mark" />
                            <p>ניהול בניינים</p>
                        </div>
                        <div className="second-point point">
                            <img src={vMark} alt="" className="v-mark" />
                            <p>ניהול ועד בית</p>
                        </div>

                        <div className="third-point point">
                            <img src={vMark} alt="" className="v-mark" />
                            <p>אחזקת מבנים</p>
                        </div>
                    </div>
                    <button className="ask-for-details-btn" onClick={() => { toggleInstantForm() }}>
                        <p>בקשו עוד פרטים</p>
                        <img src={leftChevron} alt="" className="left-chevron" />
                    </button>

                </div>

            </div>
            <img src={heroWave} alt="" className="hero-lower-wave" />

            <div className="wave-container">

                <div className="rectangle-wave">
                    <div className="services-icons">

                        <div className="icon-container">
                            <img src={binIcon} alt="" className="maintenances" />
                            <p>סביבה</p>
                        </div>

                        <div className="icon-container">
                            <img src={maintenancesIcon} alt="" className="maintenances" />
                            <p>תחזוקה</p>

                        </div>

                        <div className="icon-container">
                            <img src={washingIcon} alt="" className="maintenances" />
                            <p>שטיפה</p>

                        </div>

                        <div className="icon-container">
                            <img src={windowsIcon} alt="" className="maintenances" />
                            <p>חלונות</p>

                        </div>

                        <div className="icon-container">
                            <img src={safetyIcon} alt="" className="maintenances" />
                            <p>בטיחות</p>

                        </div>

                        <div className="icon-container">
                            <img src={paintingIcon} alt="" className="maintenances" />
                            <p>צביעה</p>

                        </div>

                        <div className="icon-container">
                            <img src={polishIcon
                            } alt="" className="maintenances" />
                            <p>הברקה</p>

                        </div>

                        <div className="icon-container">
                            <img src={inventoryIcon} alt="" className="maintenances" />
                            <p>מלאי</p>

                        </div>

                    </div>

                </div>

            </div>


            <div className="form-overlay-dark" style={instantFormClosed ? { opacity: 0 } : { opacity: 1, pointerEvents: "auto" }} >

                <div className="instant-form" >

                    <FontAwesomeIcon icon={faX} className="close-btn" onClick={() => { toggleInstantForm() }} />
                    <p className="sub-header">שלחו פניה ונחזור אליכם במהירות </p>

                    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="my-form" >

                        <input type="text" placeholder="שם" className="fist-input" name="name" />

                        <input type="email" placeholder="אימייל" name="email" />

                        <input type="number" placeholder="טלפון" name="phone" />

                        <textarea placeholder="הודעה" name="message"></textarea>

                        <button className="send-btn">שליחה</button>

                    </form>
                    {successMessage && <p className="success-message">ההודעה נשלחה בהצלחה!</p>}

                </div>

            </div>

            <div className="fast-contact-btn">

                <div className="phone-container" onClick={handlePhoneClick}>
                    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                </div>

                <div className="whatsapp-container" onClick={handleWhatsAppClick}>
                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
                </div>


            </div>


        </div >
    );
}


