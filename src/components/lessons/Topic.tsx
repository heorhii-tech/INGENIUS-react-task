import { FC } from "react";
import { TopicProps } from "../../types/types";
const Topic: FC<TopicProps> = ({ topic }) => {
  return <li>{topic}</li>;
};

export default Topic;
