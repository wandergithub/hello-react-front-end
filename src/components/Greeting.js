import React, { getState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/config";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(getMessage());
  }, []);
  return (
    <div>
      <h1>Random message:</h1>
      <h4>{message}</h4>
    </div>
  );
};

export default Greeting;