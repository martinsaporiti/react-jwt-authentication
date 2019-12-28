// import React from 'react';
// import AuthenticationService from '../services/authentication.service';
// import AuthUserContext from './context';
// import { authSubject } from '../services/authentication.service';


// //TODO: Pasar a Hooks
// // https://stackoverflow.com/questions/56351203/change-hoc-wrapper-component-with-its-own-state-to-react-hooks
// const withAuthentication = Component => {


//     class WithAuthentication extends React.Component {
    
//         constructor(props) {
//             super(props);
//             this.state = {
//               authUser: null,
//             };
//             authSubject
//                  .subscribe(data => this.setState({ authUser: data }))
//         }
        
//         componentDidMount() {

//             if(this.state.authUser == null){
//                 const authUser = AuthenticationService.getAuthUser();
//                 this.setState({ authUser });
//             }
            
//         }
        
//         render() {
            
//             return (
//                 <AuthUserContext.Provider value={this.state.authUser}>
//                   <Component {...this.props} />
//                 </AuthUserContext.Provider>
//             );
//         }
//     }
    
//     return WithAuthentication;
// };

// export default withAuthentication;