import { Contact } from "../Contact/Contact";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import "./layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="layout">
            <header>
                <Header />
            </header>

            <main>
                <Hero />
                <Contact />

            </main>
        </div>
    );
}
