import React, { useCallback, useState, FunctionComponent, useEffect } from "react";
import { usePlaidLink } from 'react-plaid-link';
import { useSelector } from "react-redux";
import { createLinkToken } from "../../helpers/Connections";
const PlaidContainer = () => {
  const config = {
    token,
    onSuccess,
    // onExit
    // onEvent
  };
  const { open, ready, error } = usePlaidLink(config);
  const username = useSelector(state => state.user.username)
  const [token, setToken] = useState("");
  useEffect(() => {
    let jwt = localStorage.getItem("token")

      createLinkToken({username: username},jwt).then(response => {
        setToken(response.data.linkToken)
      })
  },[])
  const onSuccess = useCallback(
    (public_token, metadata) => {
      // send public_token to server
    },
    []
  );
    return (
        <div>
        
        </div>
    
    )
}

export default PlaidContainer
