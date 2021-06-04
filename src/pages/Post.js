import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "../axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PostForm from "../components/PostForm";

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  title: {
    fontSize: 24,
  },
});

export default function Post() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [post, setPost] = useState(null);
  let { slug } = useParams();
  slug = slug.replace(":", "");

  React.useEffect(() => {
    axios.get(`/posts/${slug}?_embed=comments`).then((res) => {
      setPost(res.data);
    });
  }, [slug]);

  const { body, title, id, comments = [] } = post || {};
  const deletePost = (postId) => {
    axios.delete("/posts/" + postId).then(
      (res) => {
        alert("Post was deleted ");
        dispatch({ type: "DELETE_POST", id: +id });
        history.push("/home");
      },
      (reason) => {
        alert("Post was not deleted because" + reason);
      }
    );
  };

  const updatePost = (title, body) => {
    const data = { title, body };
    axios.put("/posts/" + slug, data).then(
      (res) => {
        alert("Post was updated , please reload page ");
      },
      (reason) => {
        alert("Post was not deleted because" + reason);
      }
    );
  };

  const postComment = (__, body) => {
    const data = {
      postId: id,
      body: body,
    };
    axios.post("/comments", data).then(
      (res) => {
        alert(
          "Coomments was updated , please  reload site :) "
        );
      },
      (reason) => {
        alert("Post was not deleted because" + reason);
      }
    );
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
        <Typography variant="body2" component="h2">
          Comments list
        </Typography>
        <Typography variant="body2" component="div">
          {comments.map(({ body, id }) => {
            return <p key={id}>{body}</p>;
          })}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => deletePost(id)}
          variant="contained"
          color="secondary"
        >
          Delete this post
        </Button>
      </CardActions>
      <CardActions>
        {title && body && (
          <PostForm
            onClick={updatePost}
            title={title}
            body={body}
            label="Update"
          />
        )}
      </CardActions>
      <CardActions>
        <Typography variant="body2" component="p">
          Create comment :
        </Typography>
        <PostForm onClick={postComment} hideTitle={true} label="Add comment" />
      </CardActions>
    </Card>
  );
}
