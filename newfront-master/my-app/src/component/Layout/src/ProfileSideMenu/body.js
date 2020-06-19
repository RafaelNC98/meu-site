import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import { mergeClasses } from '../../../../../../../classify';
import LoadingIndicator from '../../../../../../LoadingIndicator';

import defaultClasses from './body.css';

const loadingIndicator = <LoadingIndicator>{`Carregando...`}</LoadingIndicator>;

const Body = props => {
    // Props.
    const { isLoading } = props;

    // Members.
    const classes = mergeClasses(defaultClasses, props.classes);

    // Render.
    if (isLoading) {
        return loadingIndicator;
    }

    return <div className={classes.root}>a</div>;
};

Body.propTypes = {
    classes: shape({
        root: string
    }),
    closeDrawer: func,
    isLoading: bool
};

export default Body;
