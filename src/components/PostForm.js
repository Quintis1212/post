import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function PostForm({
  onClick,
  title = "",
  body = "",
  label = "Post",
  hideTitle = false,
}) {
  const classes = useStyles();

  const titleRef = useRef([]);
  const bodyRef = useRef([]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {!hideTitle && (
        <TextField
          inputRef={titleRef}
          id="filled-basic"
          label="Title"
          variant="filled"
          defaultValue={title || ""}
        />
      )}

      <TextField
        inputRef={bodyRef}
        id="filled-basic"
        label="Body"
        variant="filled"
        defaultValue={body || ""}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          onClick(titleRef?.current?.value, bodyRef?.current?.value)
        }
      >
        {label}
      </Button>
    </form>
  );
}
