import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost(){
    return <>
        <PostBody 
            post={{
                id: '',
                title: 'Death Note ganhará uma nova adaptação em live-action pelos criadores de Stranger Things',
                description: '',
                picture: 'https://img1.ak.crunchyroll.com/i/spire4/458fb81920a2ce210568c838952758c41657132511_large.png',
                slug: '',
                content: (
                    <>
                        <p>
                            O portal de notícias hollywoodianas Deadline informou que, em luz ao enorme sucesso da quarta temporada de Stranger Things, os Irmãos Duffer, showrunners e criadores da série, se ramificaram da Netflix e criaram sua própria produtora que já tem alguns projetos e adaptações anunciados.
                        </p>
                        <p>
                            Com o nome de Upside Down Pictures, nome advindo da série que colocou os Irmãos Duffer em destaque nos últimos anos, a produtora irá criar uma nova adaptação em live-action de Death Note, o famoso mangá escrito por Tsugumi Ohba e ilustrado por Takeshi Obata. A série terá uma nova abordagem da obra original, não tendo nenhuma ligação com nenhuma outra adaptação, nem mesmo do filme da Netflix lançado em 2017.
                        </p>
                    </>
                )
            }}    
        />
    </>;
}