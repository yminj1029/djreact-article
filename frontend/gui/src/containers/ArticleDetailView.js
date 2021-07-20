import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";

const ArticleDetailView = ({ match }) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const articleID = match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      setArticle(res.data);
      console.log(res.data);
    });
  }, [match]);
  return (
    <Card title={article.title}>
      <p>{article.content}</p>
    </Card>
  );
};

export default ArticleDetailView;
