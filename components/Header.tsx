'use client';
import "./../styles/header.scss";
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <button
                className="burger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
            >
                <Image
                    src={isOpen ? "/images/theme/croix.png" : "/images/theme/burgerButton.svg"}
                    alt={isOpen ? "Fermer le menu" : "Menu burger"}
                    width={48}
                    height={48}
                />
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><button className="buttonMenu">Accueil</button></li>
                    <li><button className="buttonMenu">Podcasts</button></li>
                    <li><button className="buttonMenu tag tagTous">Tous</button></li>
                    <li><button className="buttonMenu tag tagCulture">Culture</button></li>
                    <li><button className="buttonMenu tag tagSociete">Société</button></li>
                    <li><button className="buttonMenu tag tagPolitique">Politique</button></li>
                    <li><button className="buttonMenu tag tagInternational">International</button></li>
                </ul>
                <div><button className="buttonFooterMenu">Débloquez les articles !</button></div>
            </nav>
            <Image className="logo"
                src="/images/theme/logoColor1line.svg"
                alt="logo Diplomatic Post"
                width={190}
                height={55}
            />
            <nav className="contentButtonGroup">
                <div><button className="buttonGroup"><Image src="/images/theme/military_tech.svg" alt="VIP" width={32} height={32} /></button></div>
                <div><button className="buttonGroup"><Image src="/images/theme/bedtime.svg" alt="Theme" width={32} height={32} /></button></div>
                <div><button className="buttonGroup longButtonGroup"><Image src="/images/theme/profilePic.png" alt="Profile" width={32} height={32} />S4W6 Design</button></div>
            </nav>
        </header>
    );
}
