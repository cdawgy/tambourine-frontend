import Article from "../components/news/article/Article"
import {
  Autocomplete,
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import NewsArticle from "../types/NewsArticle"
import NewsApi from "../utils/NewsApi"
import countries from "../constants/news/CountryCodes"
import CountryCode from "../types/CountryCode"
import EmptyArticle from "../components/news/empty-article/EmptyArticle"

const News = () => {
  const newsApi = new NewsApi("07a4eb973ebc4033b081244bd9ccf7b3")
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [isArticlesLoading, setIsArticlesLoading] = useState<boolean>(true)
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>({
    code: "us",
    name: "United States",
  })

  useEffect(() => {
    setIsArticlesLoading(true)
    newsApi
      .getTopHeadlines(selectedCountry.code)
      .then((newsArticles) => {
        setArticles(newsArticles)
      })
      .finally(() => setIsArticlesLoading(false))
  }, [selectedCountry])

  return (
    <Container>
      <Typography variant="h5" sx={{margin: "50px 0"}}>Top Headlines</Typography>
      <Autocomplete
        value={selectedCountry}
        disablePortal
        options={countries}
        onChange={(event, value) => setSelectedCountry(value!)}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props
          return (
            <Box key={key} component="li" {...optionProps}>
              {option.name}
            </Box>
          )
        }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
      {isArticlesLoading && <CircularProgress />}
      {!isArticlesLoading &&
        articles.map((article) => (
          <Article
            title={article.title}
            imageSource={article.urlToImage}
            source={article.source.name}
            author={article.author}
            description={article.description}
          />
        ))}
      {articles.length === 0 && !isArticlesLoading && <EmptyArticle />}
    </Container>
  )
}

export default News
