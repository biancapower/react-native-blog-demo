import React from "react";

const BlogContext = React.createContext();

/******************************************************************
This is the provider component that will be used to wrap the entire app
in order to make the context object available to all child components.

The provider component is a special component that is provided by the
React.createContext() function (above).

`children` is a special prop that is automatically passed to every
component by React. It is a reference to the child components that
are wrapped by the provider component.
******************************************************************/
export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: "Blog Post #1", body: "This is the body of blog post #1" },
    { title: "Blog Post #2", body: "This is the body of blog post #2" },
    { title: "Blog Post #3", body: "This is the body of blog post #3" },
    { title: "Blog Post #4", body: "This is the body of blog post #4" },
    { title: "Blog Post #5", body: "This is the body of blog post #5" },
  ];

  /******************************************************************
  The `value` prop is used to pass data to all child components.
  The value prop can be any type of data, including an array, object,
  or function.
  ******************************************************************/
  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
