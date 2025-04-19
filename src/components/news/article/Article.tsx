import { Grid, Typography } from "@mui/material"
import "./Article.css"
import ExternalLink from "../../buttons/ExternalLink"

const Article = (props: {
  title: string
  imageSource: string
  source: string
  author: string
  description: string
}) => {
  const { title, imageSource, source, author, description } = props

  return (
    <Grid container className="article">
      <Grid size={{ xs: 12, md: 4, lg: 6 }}>
        <div
          className="news-image"
          style={{ backgroundImage: `url(${imageSource})` }}
        />
      </Grid>
      <Grid className="article-body" size={{ xs: 12, md: 8, lg: 6 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Typography variant="subtitle2">{author}</Typography>
        <Typography variant="subtitle2">{source}</Typography>
        <ExternalLink text="Read more" />
      </Grid>
    </Grid>
  )
}

export default Article
