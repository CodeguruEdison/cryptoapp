import { Card } from "antd";
import { NewsProvider } from "..";
import { ICryptoNews } from "../../models/IModel";
import NewsImageContainer from "./NewsImageContainer";
const demoImageUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const NewsCard = (prop: ICryptoNews) => {
  const news = prop;
  return (
    <Card hoverable className="news-card">
      <a href={news.url} target="_blank" rel="noreferrer">
        <NewsImageContainer {...news}></NewsImageContainer>
        <p>
          {news.description.length > 100
            ? `${news.description.substring(0, 100)}...`
            : news.description}
        </p>
        <NewsProvider {...news}></NewsProvider>
      </a>
    </Card>
  );
};

export default NewsCard;
