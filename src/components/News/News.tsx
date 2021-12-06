/* eslint-disable jsx-a11y/img-redundant-alt */
import { Col, Row, Select } from "antd";
import { useGetCryptosNewsQuery } from "../../services/CryptoNewsApi";
import { Coin, ICryptoNews } from "../../models/IModel";
import NewsCard from "./NewsCard";
import { useState } from "react";
import { useGetCryptosQuery } from "../../services/CryptoApi";

const { Option } = Select;
const News = ({ simplified }: { simplified?: boolean }) => {
  const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState<string>("Cryptocurrency");
  const { data: cryptosList } = useGetCryptosQuery(count);

  const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({
    newsCategory,
    count: count,
  });
  console.log(cryptoNews);
  const handleSelectOnChange = (value: string) => {
    console.log(value);
    setNewsCategory(value);
  };

  if (isFetching) return <>Loading...</>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={handleSelectOnChange}
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }
            value={newsCategory}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {cryptosList?.data.coins.map((coin: Coin) => (
              <Option value={coin.name} key={coin.id}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news: ICryptoNews, index: number) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <NewsCard {...news} />
        </Col>
      ))}
    </Row>
  );
};

export default News;
