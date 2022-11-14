import { useState } from 'react';

export default function useToken() {
    
const getTokenAdmin = () => {
    const tokenString = sessionStorage.getItem('tokenAdmin');
    const userToken = JSON.parse(tokenString);
    return userToken?.tokenAdmin
  };
  const [tokenAdmin, setTokenAdmin] = useState(getTokenAdmin());
  const saveTokenAdmin = userToken => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  setTokenAdmin(userToken.tokenAdmin);
  };

return {
setTokenAdmin: saveTokenAdmin,
tokenAdmin,

}
}