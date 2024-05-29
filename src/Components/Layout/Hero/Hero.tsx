import "./Hero.css";
import vMark from "../../../images/vmark.svg"
import buildingHero from "../../../images/buildinghero.png"
import leftChevron from "../../../images/leftchevron.svg"
import heroWave from "../../../images/herowave.svg"


export function Hero(): JSX.Element {
    return (
        <div className="Hero">
            <div className="content">

                <div className="image-hero-container">
                    <img src={buildingHero} alt="" />
                </div>

                <div className="description">
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
                        <img src={leftChevron} alt="" />
                    </button>
                </div>

            </div>

            <div className="wave-container">
                <img src={heroWave} alt="" className="hero-wave"/>
                <div className="rectangle-wave"></div>
            </div>
        </div >
    );
} 
