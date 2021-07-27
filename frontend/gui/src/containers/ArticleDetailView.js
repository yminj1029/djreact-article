import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";

const ArticleDetailView = ({ match, history }) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const articleID = match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      setArticle(res.data);
      console.log(res.data);
      console.log(match);
    });
  }, []);

  const handleDelete = () => {
    const articleID = match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    history.push("/");
  };

  return (
    <>
      <Card title={article.title}>
        <p>{article.content}</p>
      </Card>
      <CustomForm
        requestType="put"
        articleID={match.params.articleID}
        btnText="Update"
      ></CustomForm>
      <form onSubmit={handleDelete}>
        <Button type="danger" htmlType="submit">
          Delete
        </Button>
      </form>
    </>
  );
};

export default ArticleDetailView;
