import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography  } from '@material-ui/core'

const styles = {
	media: {
	objectFit: 'none',
	},


};

function ImgMediaCard(props) {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					className={classes.media}
					image="http://placehold.it/250x250"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="subheading">
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores rem libero tempora, ipsam veritatis non.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
			<div className={classes.button}>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</div>
				
			</CardActions>
		</Card>
	);
}

ImgMediaCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);