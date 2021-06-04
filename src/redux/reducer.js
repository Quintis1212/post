export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DATA": {
      const content = action.payload;
      // Some one change the database so I must filter
      // posts to choose only correct posts like this {id:...,title:...,body:...}
      const filteredContent = content.filter(
        ({ id, title, body }) => id && title && body
      );
      return {
        content: filteredContent,
      };
    }
    case "DELETE_POST": {
      const deletedPostId = action.id;
      const filteredContent = state.content.filter(
        ({ id }) => id !== deletedPostId
      );
      return {
        content: filteredContent,
      };
    }
    case "ADD_POST": {
      const post = action.post;
      const newContent = [...state.content, { ...post }];
      return {
        content: newContent,
      };
    }
    default:
      return state;
  }
}
