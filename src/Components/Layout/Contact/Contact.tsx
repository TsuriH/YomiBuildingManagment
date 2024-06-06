import "./Contact.css";

import { faFacebook, faSquareWhatsapp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { useForm } from "react-hook-form";

export function Contact(): JSX.Element {
    const { handleSubmit } = useForm();
    const form = useRef<HTMLFormElement | null>(null)

    const sendEmail = (e: any) => {
        if (form.current) {
            emailjs
                .sendForm('yumi2024', 'yumi_landing_page', form.current, {
                    publicKey: 'hj5e7F6IY_Pgmt-AY',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        console.log("message sent")
                        // e.target.reset()
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };


    return (
        <div className="Contact">
            <div className="white-bg-image-cover"></div>
            <div className="content">
                <div className="text-container">
                    <div className="text">
                        <div className="small-line-deco"></div>
                        <h2>תנו לנו לנהל לכם את המשרד
                        </h2>
                        <p className="description">ב-<span>YUMI</span>, אנו מאמינים שניהול משרדים אפקטיבי משפיע ישירות על פרודוקטיביות ואווירה במקום עבודה. עם רקע עשיר של מעל לעשור בתחום, חברתנו מספקת פתרונות מותאמים לכל סוגי הארגונים והמבנים. מאחזקה שוטפת ועד ניקיון מקצועי, אנו כאן כדי להבטיח שהמשרד שלכם יהיה יעיל, נקי ומזמין.
                        </p>
                        <p>
                            השאירו פרטים ונשמח לעזור לכם בניהול מלא כולל תחזוקה, הסירו דאגה מליבכם ותנו למקצוענים לטפל בכל!</p>
                        <div className="social-container">
                            <div className="phone">
                                <FontAwesomeIcon icon={faPhone} />
                                <p>0504445632</p>
                            </div>
                            <div className="email">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>yuminihul@gmail.com</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="contact">

                    <div className="contact-headline">
                        <h2>יצירת קשר</h2>
                        <p>מכאן מתחילים השאירו פרטים ונחזור בהקדם האפשרי</p>

                    </div>

                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>

                        <input type="email" placeholder="אימייל" name="email" />

                        <input type="text" placeholder="שם" className="fist-input" name="name" />

                        <input type="text" placeholder="עיר" name="city" />

                        <input type="number" placeholder="טלפון" name="phone" />

                        <input type="number" placeholder="מספר  קומות" name="number_floors" />

                        <input placeholder="מספר דירות בבניין" name="condos_in_buildings" />

                        <textarea placeholder="הודעה" name="message"></textarea>

                        <button className="send-btn">שליחה</button>

                    </form>
                </div>

            </div>


        </div>
    );
}
