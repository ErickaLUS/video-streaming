import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubscribedChannels,
  getVideosByChannel,
} from "../redux/actions/videos.action";
import { useEffect } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Hr = styled.hr`
  margin-left: 0px;
  border: 3px solid ${({ theme }) => theme.soft};
`;
const Content = styled.div``;
const Image = styled.img`
  height: 100px;
  width: 202px;
`;
const Description = styled.div`
  margin-left: 35px;
`;

const Subscription = () => {
  /*  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );
  console.log(videos[0].snippet.title); */
  return <Container>Subscription</Container>;
};

export default Subscription;
