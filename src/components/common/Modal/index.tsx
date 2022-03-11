import React from 'react';
import Icons from '../Icons';
import './Style.scss';

type Prop = {
    children: JSX.Element | JSX.Element[];
    closeHandler: () => void;
    title?: string;
    maxWidth?: number;
};

const Modal = ({ children, maxWidth, title, closeHandler }: Prop) => {
    return (
        <div className="modal-container">
            <div className="modal-overlay" />
            <div className="modal-dialog" role="document" style={{ maxWidth }}>
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <div className="modal-header">
                            {title && <h5 className="modal-title">{title}</h5>}
                            {closeHandler && (
                                <button
                                    type="button"
                                    onClick={closeHandler}
                                    className="modal-close-btn"
                                    aria-label="close"
                                >
                                    <Icons name="x" />
                                </button>
                            )}
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.defaultProps = {
    title: null,
    maxWidth: 720,
};

export default Modal;
