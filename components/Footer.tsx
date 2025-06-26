'use client';
import "./../styles/footer.scss";


export default function Footer() {
    return (
        <footer>
            <div className="footerInfo">
                <p className="description">Média indépendant dédié à l'analyse <br /> géopolitique mondiale.</p>
                <p className="mention">© The Diplomatic Post {new Date().getFullYear()} - Tous droits réservés</p>
            </div>
            <nav className="footerNav">
                <ul>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Mentions légales</a></li>
                </ul>
            </nav>
        </footer>
    );
}