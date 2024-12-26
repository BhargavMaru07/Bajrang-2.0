import { createContext, useContext } from "react";

export const CommentContext = createContext({
    comments: [{
        msg:""
    }],
    addComment: (msg) => {}
});

export default function useComment() {
    return useContext(CommentContext);
}

export const CommentProvider = CommentContext.Provider;