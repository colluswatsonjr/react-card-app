import title from '../photos/title.png'
import content from '../photos/content.png'
import submit from '../photos/submit.png'
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const classes = {
    image: {
        width: '50%',
        height:'100%'
    }
}


const About = () => {
    return (
        <Box style={classes.page}>
                <Typography variant="h2">About...</Typography>
                <Typography variant="h6">
                    This card app creates simple cards. Each card contains a title and content section.
                    The title section of the form has a limit of 20 characters, while the content field dosent have a set limit.
                    <br/>
                    <br/>

                    Create title:
                    <br/>

                    <img style={classes.image} src={title}/>
                    <br/>

                    Create content:
                    <br/>

                    <img style={classes.image} src={content}/>
                    <br/>

                    Sumbit!
                    <br/>

                    <img style={classes.image} src={submit}/>

                </Typography>
        </Box>
    );
}

export default About;