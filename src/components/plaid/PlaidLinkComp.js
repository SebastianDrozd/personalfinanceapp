import React from "react";
import { usePlaidLink } from "react-plaid-link";
import { useSelector } from "react-redux";
import { exchangeAccessToken, setAccessToken } from "../../helpers/Connections";
const PlaidLinkComp = (props) => {
    const username = useSelector(state => state.user.username)
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    let jwt = localStorage.getItem("token");
    console.log("jwt",jwt, "public",public_token,"username",username)
   // setAccessToken({username:username,token: public_token},jwt)
   exchangeAccessToken({username: username, token: public_token},jwt).then(response => {
     console.log(response)
   })
  }, []);
  const config = {
    token: props.linkToken,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);
  return (
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>
    </div>
  );
};

export default PlaidLinkComp;
