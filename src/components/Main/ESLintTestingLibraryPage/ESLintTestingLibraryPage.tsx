import { eSLintTestingLibraryPageContent } from './eSLintTestIngLibraryPageContent';
import { Article } from '../../atomic/Article';

export const ESLintTestingLibraryPage = () => {
  return <>
    <h1>{eSLintTestingLibraryPageContent.title}</h1>
    {eSLintTestingLibraryPageContent.articles.map(article => {
                return <Article key={article.sequenceId} article={article} />})}
  </>;
}
