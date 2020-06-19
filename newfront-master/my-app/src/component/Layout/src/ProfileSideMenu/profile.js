import React from 'react';
import { bool, func, shape, string } from 'prop-types';

import defaultClasses from './profile.css';

import { ArrowLeft } from 'react-feather';
import {Voltar_mobile} from '../../../../../../MiniCart/header_style'

import { mergeClasses } from '../../../../../../../classify';

const Profile = props => {
    // Props.
    const { user, isOpen } = props;
    const { closeDrawer } = props;

    function handleSignOut() {
        const { signOut, history, closeDrawer } = props;

        signOut({ history });
        closeDrawer();
    }

    const redirect = route => {
        window.location.href = route;
    };

    // Members.
    const classes = mergeClasses(defaultClasses, props.classes);
    const rootClass = isOpen ? classes.root_open : classes.root;

    return (
        <aside className={rootClass}>
            <Voltar_mobile onClick={closeDrawer}><ArrowLeft size='25' color="#3e278f"/></Voltar_mobile>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <img alt="Profile icon" src="/icons/icon_profile.png" />
                    <span className={classes.headerContainerSpan}>
                        Olá {user.currentUser.firstname}!
                    </span>
                    <button
                        className={classes.headerContainerButton}
                        onClick={() => handleSignOut()}
                    >
                        <span className={classes.headerContainerSpan}>
                            Sair
                        </span>
                    </button>
                </div>
                <div className={classes.listContainer}>
                    <button onClick={() => redirect('/my-account/my-data')}>
                        <span>Meus Dados</span>
                    </button>
                    <button
                        onClick={() => redirect('/my-account/my-purchases')}
                    >
                        <span>Meus Pedidos</span>
                    </button>
                    {/* <button
                        onClick={() => redirect('/my-account/my-purchases')}
                    >
                        <span>meus favoritos</span>
                    </button> */}
                    {/*<button onClick={() => redirect('/my-account/my-cards')}>
                        <span>meus cartões</span>
                </button>*/}
                </div>
            </div>
        </aside>
    );
};

Profile.propTypes = {
    classes: shape({
        header: string,
        root: string,
        root_open: string,
        title: string
    }),
    closeDrawer: func,
    isOpen: bool
};

export default Profile;
