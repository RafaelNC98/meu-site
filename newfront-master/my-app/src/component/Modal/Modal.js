import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyledModal,
    StyledContent,
    StyledLoginContent,
    StyledAlertContent
} from './StyledComponents';

const propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    children: PropTypes.node
};

const defaultProps = {
    onClose: false,
    show: false,
    children: null
};

class Modal extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        const { toggleModal } = this.props;
        if (
            this.wrapperRef &&
            !this.wrapperRef.contains(event.target) &&
            toggleModal
        ) {
            toggleModal(false);
        }
    }

    render() {
        const {
            show,
            children,
            loginModal,
            alertModal,
            ...attributes
        } = this.props;

        if (!show) {
            return null;
        }

        return (
            <StyledModal {...attributes}>
                {loginModal ? (
                    <StyledLoginContent ref={this.setWrapperRef}>
                        {children}
                    </StyledLoginContent>
                ) :
                alertModal ? (
                    <StyledAlertContent ref={this.setWrapperRef}>
                        {children}
                    </StyledAlertContent>
                ) : (
                    <StyledContent>{children}</StyledContent>
                )}
            </StyledModal>
        );
    }
}

//Modal.propTypes = propTypes;
//Modal.defaultProps = defaultProps;
export default Modal;
