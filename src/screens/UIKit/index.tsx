import React from 'react';
import Alert from '../../components/common/Alert';
import FeatherIcons from './FeatherIcons';
import Icons from '../../components/common/Icons';

const UIKit = () => {
    return (
        <div className="ui-kit-page">
            <div className="container">
                <div className="ui-box ui-mb-30">
                    <h2>Typography</h2>
                    <hr />
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                    <hr />
                    <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit</code>
                    <hr />
                    <div className="ui-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
                <div className="ui-box ui-mb-30">
                    <h2>Anchor Tag</h2>
                    <button type="button" className="ui-link">
                        Some Link
                    </button>
                </div>
                <div className="ui-box ui-mb-30">
                    <h2>Alert Component</h2>
                    <Alert
                        type="error"
                        message="Error messge will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <Alert
                        type="info"
                        message="Info messge will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <Alert
                        type="success"
                        message="Success messge will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <Alert
                        type="warning"
                        message="Warning messge will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                </div>

                <div className="ui-box ui-mb-30">
                    <h2>Input</h2>
                    <div className="ui-max-w-300 ui-mb-20">
                        <input type="text" className="ui-input" placeholder="Placeholder goes here" />
                    </div>
                    <div className="ui-max-w-300 ui-mb-20">
                        <div className="ui-input-wrapper">
                            <Icons name="user" />
                            <input type="text" className="ui-input" placeholder="Placeholder goes here" />
                        </div>
                    </div>
                </div>
                <div className="ui-box ui-mb-30">
                    <h2>Feather Icons</h2>
                    <FeatherIcons />
                </div>
            </div>
        </div>
    );
};

export default UIKit;
