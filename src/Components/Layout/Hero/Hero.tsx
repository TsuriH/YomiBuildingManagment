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

export function Hero(): JSX.Element {
    return (
        <div className="Hero">

            <div className="hero-content">

                <div className="hero-image">
                    <img src={buildingHero} alt="" />
                    <div className="overlay"></div>
                </div>

                <div className="hero-copy">
                    <p className="first-sen">הבחירה המקצועית שלך לשירותי ניהול ואחזקה</p>
                    <h2>ניהול ואחזקת מבנים בסטנדרט שלא הכרתם!</h2>
                    <p className="third-sen">חברת <span>YUMI</span> מתמחה בניהול ותחזוקה של בנייני דירות מסוגים שונים. היא מעניקה שירות מקצועי ומהיר, הכולל טיפול כולל בצרכי הדיירים. הצטרפו לקהילה הגדלה של לקוחות מרוצים וחוו את ההבדל המשמעותי כבר היום!</p>

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
                    <button className="ask-for-details-btn">
                        <p>בקשו עוד פרטים</p>
                        <img src={leftChevron} alt="" className="left-chevron" />
                    </button>
                </div>

            </div>

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
            <img src={heroWave} alt="" className="hero-lower-wave" />
        </div >
    );
} 
