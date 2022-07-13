/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import PostBody from "../../ui/components/PostBody/PostBody";
import styles from "../../ui/components/PostBody/PostBody.module.css"

export default function MeuPost(){
    return <PostBody 
                post={{
                    id: '',
                    title: 'Adaptação em anime de SPY x FAMILY revela nova ilustração promocional para o episódio 10',
                    description: '',
                    picture: 'https://img1.ak.crunchyroll.com/i/spire2/3cb6b8c5ead5504f5cceb82b9cf3e5811654954522_large.png',
                    slug: '',
                    content : (
                        <>
                            <p>
                              Foi revelada hoje uma nova ilustração promocional para o décimo episódio da adaptação em anime de SPY x FAMILY, que é um dos destaques da temporada na Crunchyroll. O episódio vai ao ar hoje, às 12h30 e novos episódios semanalmente no mesmo horário.
                            </p>
                            <p>
                            O anime está sendo produzido em parceria pelos renomados estúdios WIT STUDIO (Ranking of Kings) e CloverWorks (My Dress-Up Darling), com Kazuhiro Furuhashi (Hunter x Hunter 1999, Dororo) na direção, Kazuaki Shimada (The Promised Neverland, Mahou Shoujo Nante Mouiidesukara) na adaptação do design de personagens e Kyouji Asano (Attack on Titan) e Kazuaki Shimada (The Promised Neverland, Mahou Shoujo Nante Mouiidesukara) na direção de animação.
                            </p>
                            <h3>Nova Ilustração Promocional:</h3>
                            <img className={styles['post-picture2']}src="https://img1.ak.crunchyroll.com/i/spire4/e415037d1564153a094344ec85a568651654954381_main.jpg" />
                            <p>No anime a Yor será interpretada por Saori Hayami (Yukino em Oregairu, Rachel em Tower of God), a Anya será interpretada por Atsumi Tanezaki (Dai em Dragon Quest: The Adventure of Dai, Vivy em Vivy: Fluorite Eye's Song) e Takuya Eguchi (Hachiman Hikigaya em Oregairu) vai interpretar o Loid.</p>
                        </>
                    )
                }}
            />
}