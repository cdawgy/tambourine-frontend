import { Launch } from "@mui/icons-material"

const ExternalLink = (props: { text: string }) => {
  const { text } = props
  return (
    <button>
      {text} <Launch />
    </button>
  )
}

export default ExternalLink
