import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaidContainer from "../../components/plaid/PlaidContainer";
import PlaidLinkComp from "../../components/plaid/PlaidLinkComp";
import { createLinkToken } from "../../helpers/Connections";
import { setPage } from "../../redux/slices/userSlice";

const BankContainer = () => {
  const username = useSelector((state) => state.user.username);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage({ page: "bank" }));
  }, []);
  useEffect(() => {
    let jwt = localStorage.getItem("token");
    createLinkToken({ username: username }, jwt).then((response) => {
      setToken(response.data.linkToken);
      console.log(token)
    });
  }, []);
  return (
    <div>
      <PlaidLinkComp linkToken={token}/>
    </div>
  );
};

export default BankContainer;
