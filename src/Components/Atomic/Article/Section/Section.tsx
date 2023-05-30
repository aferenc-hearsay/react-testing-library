import React from 'react';
import parse from 'html-react-parser';
import { ISectionFC } from '../../../../types/interfaces';

export const Section: React.FC<ISectionFC> = ({ section }) => {
    return <>{parse(section.content)}</>;
};
