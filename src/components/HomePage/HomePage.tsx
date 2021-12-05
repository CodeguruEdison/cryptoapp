import React from "react";
import {Col, Row, Statistic, Typography} from "antd";
import {useGetCryptosQuery} from "../../services/CryptoApi";
import {Stats} from "../../models/IModel";
import millify from "millify";
import {Link} from "react-router-dom";
import { CryptoCurrencies, News } from '../index'

const {Title} = Typography;
const HomePage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats as Stats;
  if (isFetching) return <>Loading...</>;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      {/****TODO: #3 Convert it to Dynamic **/}
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified></CryptoCurrencies>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News{" "}
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News></News>
    </>
  );
};

export default HomePage;
