import "./Hero.css";
import vMark from "../../../images/vmark.svg"
import buildingHero from "../../../images/buildinghero.png"


export function Hero(): JSX.Element {
    return (
        <div className="Hero">
            <div className="content">

                <div className="image-hero-container">
                    <img src={buildingHero} alt="" />
                </div>

                <div className="description">
                    <p>הבחירה המקצועית שלך לשירותי ניהול ואחזקה</p>
                    <h2>ניהול ואחזקת מבנים בסטנדרט שלא הכרתם!</h2>
                    <p>חברת YUMI מתמחה בניהול ותחזוקה של בנייני דירות מסוגים שונים.היא מעניקה שירות מקצועי ומהיר, הכולל טיפול כולל בצרכי הדיירים. הצטרפו לקהילה הגדלה של לקוחות מרוצים וחוו את ההבדל המשמעותי כבר כיום!</p>

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
                </div>

            </div>
        </div >
    );
} 
