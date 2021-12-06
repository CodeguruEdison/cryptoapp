import { Typography } from "antd";
import React from "react";
import { ICryptoNews } from "../../models/IModel";
const demoImageUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const { Title } = Typography;
const NewsImageContainer = (prop: ICryptoNews) => {
  const news = prop;
  return (
    <div className="news-image-container">
      <Title className="news-Title" level={4}>
        {news.name}
      </Title>
      <img
        className="img"
        src={news.image?.thumbnail?.contentUrl || demoImageUrl}
        alt="news"
      />
    </div>
  );
};

export default NewsImageContainer;
