import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { ReactTagManager } from 'react-gtm-ts';

export function Contact(): JSX.Element {
    const { handleSubmit } = useForm();
    const form = useRef<HTMLFormElement | null>(null)
    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handlePhoneClick = () => {
        window.location.href = "tel:0504445632";
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:yuminihul@email.com?subject=מתעניין&body=שלום, אני מעוניין לקבל פרטים, חיזרו אליי בבקשה";

    };



    const sendEmail = (e: any) => {
        if (form.current) {



            emailjs.sendForm('yumi2024', 'yumi_landing_page', form.current, {
                publicKey: 'hj5e7F6IY_Pgmt-AY',
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        console.log("message sent")
                        setFormStatus('SUCCESS');
                        form.current?.reset()
                        ReactTagManager.action({
                            event: 'form_submission_success',
                            formName: 'contact_form'
                        });
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
                        <p className="description">ב-<span>YUMI </span>אנו מבינים שסביבה נקייה ומסודרת בבניין המגורים משפיעה באופן ישיר על האווירה והנוחות של הדיירים. עם ניסיון רב של יותר מעשור בתחום, חברתנו מציעה פתרונות מותאמים אישית לכל סוגי הבניינים והמבנים. החל מניקיון שוטף ועד לטיפול מקצועי באחזקה, אנו כאן כדי להבטיח שהבניין שלכם יהיה נקי, מטופח ומזמין לכל הדיירים.
                        </p>
                        <p>
                            השאירו פרטים ונשמח לעזור לכם בניהול מלא כולל תחזוקה, הסירו דאגה מליבכם ותנו למקצוענים לטפל בכל!</p>
                        <div className="social-container">
                            <div className="phone" onClick={handlePhoneClick}>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>0504445632</p>
                            </div>
                            <div className="email" onClick={handleEmailClick} >
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

                    {formStatus && (
                        <p style={{ fontSize: "2em", background: `var(--dark-purple)`, fontWeight: "bold" }} className={`form-status ${formStatus === 'SUCCESS' ? 'success' : 'error'}`}>
                            {formStatus === 'SUCCESS' ? 'הודעה נשלחה בהצלחה!' : `שגיאה בשליחת הודעה: ${formStatus}`}
                        </p>
                    )}

                </div>

            </div>


        </div>
    );
}
