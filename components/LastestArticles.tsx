'use client';
import "./../styles/lastestArticles.scss";
import Image from 'next/image';


export default function LastestArticles() {
    return (
        <>

            <h1>Derniers articles</h1>
            <div className="lastestArticles">
                <article className="inTheNews">
                    <div className="infoInTheNews">
                        <div className="tagAndAuthorInTheNews">
                            <div className='tagList'>
                                <button className="buttonMenu tag tagSociete">Société</button>
                            </div>
                            <p className="author">Léa Martin - 09.06.25</p>
                        </div>
                        <h2>Les défis de la protection des forêts face aux nouvelles menaces</h2>
                    </div>
                    <div className="imgInTheNews">
                        <Image className="imgArticle"
                            src="/images/articles/article6.jpg"
                            alt="image de l'article"
                            width={488}
                            height={274.5}
                        />
                    </div>
                </article>
                <article className="inTheNews">
                    <div className="infoInTheNews">
                        <div className="tagAndAuthorInTheNews">
                            <div className='tagList'>
                                <button className="buttonMenu tag tagInternational">International</button>
                            </div>
                            <p className="author">Marc Dubois - 08.06.25</p>
                        </div>
                        <h2>La biodiversité en péril : l'impact des espèces invasives</h2>
                    </div>
                    <div className="imgInTheNews">
                        <Image className="imgArticle"
                            src="/images/articles/article7.jpg"
                            alt="image de l'article"
                            width={488}
                            height={274.5}
                        />
                    </div>
                </article>
                <article className="inTheNews">
                    <div className="infoInTheNews">
                        <div className="tagAndAuthorInTheNews">
                            <div className='tagList'>
                                <button className="buttonMenu tag tagCulture">Culture</button>
                            </div>
                            <p className="author">Sophie Fournier - 07.06.25</p>
                        </div>
                        <h2>Agriculture durable : vers de nouvelles pratiques pour préserver les cultures</h2>
                    </div>
                    <div className="imgInTheNews">
                        <Image className="imgArticle"
                            src="/images/articles/article8.jpg"
                            alt="image de l'article"
                            width={488}
                            height={274.5}
                        />
                    </div>
                </article>
            </div>
        </>
    );
}