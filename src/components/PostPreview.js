import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.h3`
  background-color: #48cae4;
  font-size: 22px;
  color: green;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const StyledBody = styled.p`
  background-color: #2a9d8f;
  font-size: 18px;
  color: aqua;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function PostPreview({ title, body, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          component="div"
        >
          <StyledTitle>{title}</StyledTitle>
        </Typography>
        <Typography variant="body2" component="div">
          <StyledBody>{body}</StyledBody>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/productPage/:" + id}>More info ...</Link>
      </CardActions>
    </Card>
  );
}
