import Article from "../components/news/article/Article"
import { Container, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import NewsArticle from "../types/NewsArticle"

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([])

  const key = "07a4eb973ebc4033b081244bd9ccf7b3"
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log()
      setArticles(response.data.articles)
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
