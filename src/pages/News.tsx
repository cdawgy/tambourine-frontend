import Article from "../components/news/article/Article"
import { Container, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import NewsArticle from "../types/NewsArticle"
import NewsApi from "../utils/NewsApi"

const News = () => {
  const newsApi = new NewsApi("07a4eb973ebc4033b081244bd9ccf7b3")
  const [articles, setArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    newsApi
      .getTopHeadlines("us")
      .then((newsArticles) => {
        console.log(newsArticles)
        setArticles(newsArticles)
      })
  }, [])

  return (
    <Container>
      <Typography variant="h5">News</Typography>
      {articles.map((article) => (
        <Article
          title={article.title}
          imageSource={article.urlToImage}
          source={article.source.name}
          author={article.author}
          description={article.description}
        />
      ))}
    </Container>
  )
}

export default News
