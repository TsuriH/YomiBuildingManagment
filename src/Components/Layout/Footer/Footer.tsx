import { useForm } from "react-hook-form";
import "./Footer.css";
import { faFacebook, faSquareWhatsapp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
export function Footer(): JSX.Element {
    const { register, handleSubmit } = useForm();


    return (
        <div className="Footer">
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
                                <p>0555555555</p>
                            </div>
                            <div className="email">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>yomi@gmail.com</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="contact">
                    <div className="contact-headline">
                        <h2>יצירת קשר</h2>
                        <p>מכאן מתחילים השאירו פרטים ונחזור בהקדם האפשרי</p>

                    </div>
                    <form action="">
                        <label htmlFor="">

                            <input type="text" {...register("first")} placeholder="אימייל" />
                        </label>

                        <label htmlFor="">

                            <input type="text" {...register("first")} placeholder="שם" className="name-input" />
                        </label>

                        <label htmlFor="">

                            <input type="text" {...register("first")} placeholder="עיר" />
                        </label>

                        <label htmlFor="">

                            <input type="text" {...register("first")} placeholder="טלפון" />
                        </label>

                        <label htmlFor="">

                            <input type="text" {...register("first")} placeholder="מספר  קומות" />
                        </label>

                        <label htmlFor="">

                            <input{...register("first")} placeholder="מספר דירות בבניין" />
                        </label>

                        <label htmlFor="" className="message" >
                            <textarea  {...register("first")} placeholder="הודעה" ></textarea>
                        </label>

                        <button className="send-btn">שליחה</button>
                    </form>
                </div>

            </div>


        </div>
    );
}
