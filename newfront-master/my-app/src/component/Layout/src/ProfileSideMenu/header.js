import React from 'react';
import { func, shape, string } from 'prop-types';
import { X as CloseIcon } from 'react-feather';

import { mergeClasses } from '../../../../../../../classify';
import Icon from '../../../../../../Icon';
import Trigger from '../../../../../../Trigger';

import defaultClasses from './header.css';

const Header = props => {
    const { closeDrawer } = props;

    const classes = mergeClasses(defaultClasses, props.classes);
    const title = 'Perfil';

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{title}</h2>
            <Trigger action={closeDrawer}>
                <Icon src={CloseIcon} />
            </Trigger>
        </div>
    );
};

Header.propTypes = {
    classes: shape({
        root: string,
        title: string
    }),
    closeDrawer: func
};

export default Header;
