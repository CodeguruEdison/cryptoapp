import React, { ChangeEvent, useState } from "react";
import { useGetCryptosQuery } from "../../services/CryptoApi";
import { Data, Coin } from "../../models/IModel";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { useEffect } from "react";

const CryptoCurrencies = (props: ICryptoCurrenciesProps) => {
  const { simplified } = props;
  const count: number = simplified ? 10 : 100;
  //const {data:cryptosList,isFetching}:{data:ApiResult|undefined,isFetching:boolean} = useGetCryptosQuery({});
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin: Coin) =>
      coin.name.toLowerCase().includes(searchTerm?.toLocaleLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  console.log(cryptos);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isFetching) {
    return <>Loading...</>;
  }
  return (
    <>
      {/**TODO:- #5 move search into a separate  component */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrencies"
            onChange={handleSearchChange}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin: Coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}.${coin.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={coin.iconUrl}
                    alt="cryptoimage"
                  ></img>
                }
                hoverable={true}
              >
                <p>Price :{millify(Number(coin.price))}</p>
                <p>Market Cap :{millify(Number(coin.marketCap))}</p>
                <p>Daily Change :{millify(Number(coin.change))}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export interface ICryptoCurrenciesProps {
  simplified?: boolean;
}
export default CryptoCurrencies;
