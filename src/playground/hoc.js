console.log('hoc')

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info</h1>
        <p> The info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props)=>(
        <div>
            {props.isAdminProp && <p> This is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props)=>(

        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props}/>:
                <p> Please login to view info</p>}
            
        </div>
    )
};

const AdminInfo = withAdminWarning(Info) 
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info = "this is the info" />, document.getElementById('app'))