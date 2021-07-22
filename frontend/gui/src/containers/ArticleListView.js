import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "../components/Articles";
import CustomForm from "../components/Form";
const ArticleListView = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <Articles data={articles}></Articles>
      <br></br>
      <h2>Create an article</h2>
      <CustomForm></CustomForm>
    </>
  );
};

export default ArticleListView;
