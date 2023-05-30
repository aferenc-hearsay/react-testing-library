import { homePageContent } from './homePageContent';
import { Article } from '../../Atomic/Article';

export const HomePage = () => {
    return (
        <>
            <h1>{homePageContent.title}</h1>
            {homePageContent.articles.map(article => {
                return <Article key={article.sequenceId} article={article} />;
            })}
        </>
    );
};
