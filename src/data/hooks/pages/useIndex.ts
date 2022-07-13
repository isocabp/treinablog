import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex(){
    const posts: BlogPost[] = [
        {
            id: '1',
            title: 'Death Note ganhará uma nova adaptação em live-action pelos criadores de Stranger Things',
            slug: 'death-note',
            description: 'O portal de notícias hollywoodianas Deadline informou que, em luz ao enorme sucesso da quarta temporada de Stranger Things, os Irmãos Duffer, showrunners e criadores da série, se ramificaram da Netflix e criaram sua própria produtora que já tem alguns projetos e adaptações anunciados, incluindo uma nova série em live-action de Death Note. Saiba mais após o clique.',
            picture: 'https://img1.ak.crunchyroll.com/i/spire4/458fb81920a2ce210568c838952758c41657132511_large.png'
        },
        {
            id: '2',
            title: 'Adaptação em anime de SPY x FAMILY revela nova ilustração promocional para o episódio 10',
            slug: 'spy-x-family',
            description: 'Foi revelada hoje uma nova ilustração promocional para o décimo episódio da adaptação em anime de SPY x FAMILY, que é um dos destaques da temporada na Crunchyroll. O episódio vai ao ar hoje, às 12h30 e novos episódios semanalmente no mesmo horário.',
            picture: 'https://img1.ak.crunchyroll.com/i/spire2/3cb6b8c5ead5504f5cceb82b9cf3e5811654954522_large.png'
        }
    ];

    return {
        posts,
    }
}