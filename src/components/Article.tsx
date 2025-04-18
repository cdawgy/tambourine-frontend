import { Typography } from "@mui/material"

const Article = (props: {imageSource: string, source: string, author: string, description: string}) => {

    const {imageSource, source, author, description} = props

    return (
        <>
            <img src={imageSource} alt="" />
            <Typography variant="h6">
                {source} - {author}
            </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </>
    )
}

export default Article