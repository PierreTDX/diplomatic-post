'use client';
import "./../styles/inTheNews.scss";
import Image from 'next/image';


export default function InTheNews() {
    return (
        <>
            <h1>à la une</h1>
            <article className="inTheNews">
                <div className="infoInTheNews">
                    <div className="tagAndAuthorInTheNews">
                        <div className='tagList'>
                            <button className="buttonMenu tag tagInternational">International</button>
                        </div>
                        <p className="author">Hugo Lambert - 03.06.25</p>
                    </div>
                    <h2>Sommet de l’IA, quels changements sur le sujet ?</h2>
                </div>
                <div className="imgInTheNews">
                    <Image className="imgArticle"
                        src="/images/articles/article1.png"
                        alt="image de l'article"
                        width={488}
                        height={274.5}
                    />
                </div>
            </article>
        </>
    );
}