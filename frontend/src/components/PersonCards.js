import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={this.props.imgsource}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          
          
        </Card>
      );
    }
  }
  

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

  
  function AutoGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid>
            <RecipeReviewCard classes={classes} imgsource='./img/b.jpeg'/>
          </Grid>
          <Grid>
            <RecipeReviewCard classes={classes}  imgsource='./img/thomas.jpeg'/>
          </Grid>
          <Grid>
            <RecipeReviewCard classes={classes}  imgsource='./img/naoki.jpeg'/>
          </Grid>
          <Grid>
            <RecipeReviewCard classes={classes}  imgsource='./img/xavi.jpg'/>
          </Grid>
          <Grid>
            <RecipeReviewCard classes={classes}  imgsource='./img/dylan.jpeg'/>
          </Grid>
          <Grid>
            <RecipeReviewCard classes={classes}  imgsource='./img/shinji.jpeg'/>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AutoGrid);

