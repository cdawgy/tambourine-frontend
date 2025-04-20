import { ReportGmailerrorredOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

const EmptyArticle = () => {
  return (
    <Grid container display="block" sx={{textAlign: "center", marginTop: 10}}>
      <ReportGmailerrorredOutlined fontSize="large" sx={{marginBottom: 3}} />
      <Typography variant="h5">No Articles</Typography>
      <Typography variant="subtitle1">There are currently no headlines for this country.</Typography>
    </Grid>
  )
}

export default EmptyArticle
