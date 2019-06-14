// NOTE Higher Order Component- a component that renders another component

import React from "react";
import { render } from "react-dom";

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = WrappedComponent => {
    return props => (
        <div>
            {props.isAdmin && <p>This is some private info pleasse dont share!!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentification = WrappedComponent => {
    return props => (
        <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see the info</p>}</div>
    );
};
const AuthInfo = requireAuthentification(Info);

// render(<AdminInfo isAdmin={false} info="this are the details" />, document.getElementById("root"));
render(<AuthInfo isAuthenticated={false} info="this are the details" />, document.getElementById("root"));
