import { Avatar, Typography } from "antd";
import moment from "moment";
import React from "react";
import { ICryptoNews } from "../../models/IModel";
const demoImageUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const { Text } = Typography;
const NewsProvider = (prop: ICryptoNews) => {
  const news = prop;
  return (
    <div className="provider-container">
      <div>
        <Avatar
          src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl}
          alt=""
        ></Avatar>
        <Text className="provider-name">{news.provider[0]?.name}</Text>
      </div>
      <Text>{moment(news.datePublished).startOf("seconds").fromNow()}</Text>
    </div>
  );
};

export default NewsProvider;
