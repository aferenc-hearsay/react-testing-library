import React from 'react';
import { IArticleFC } from '../../../types/interfaces';
import { Section } from './Section';

export const Article: React.FC<IArticleFC> = ({ article }) => {
    return (
        <>
            <h2>{article.articleTitle}</h2>
            <article>
                {article.sections.map(section => {
                    return <Section key={section.sectionSequenceId} section={section} />;
                })}
            </article>
        </>
    );
};
