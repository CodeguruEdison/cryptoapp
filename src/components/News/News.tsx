/* eslint-disable jsx-a11y/img-redundant-alt */
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import React from "react";
import { useGetCryptosNewsQuery } from "../../services/CryptoNewsApi";
import { ICryptoNews } from "../../models/IModel";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({ simplified }: { simplified?: boolean }) => {
  const rowCount = simplified ? 6 : 12;
  const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({
    newsCategory: "CryptoCurrencies",
    count: rowCount,
  });

  console.log(cryptoNews);
  if (isFetching) return <>Loading...</>;
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.value.map((news: ICryptoNews, index: number) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
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
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImageUrl
                    }
                    alt=""
                  ></Avatar>
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("seconds").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
