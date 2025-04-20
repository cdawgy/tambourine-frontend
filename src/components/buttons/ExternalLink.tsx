import { Launch } from "@mui/icons-material"
import { Button } from "@mui/material"

const ExternalLink = (props: { text: string; url?: string }) => {
  const { text, url } = props

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      {text} <Launch sx={{ marginLeft: 1 }} />
    </Button>
  )
}

export default ExternalLink
