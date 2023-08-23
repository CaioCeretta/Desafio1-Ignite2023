# There are 3 main moments where a component is re rendered

When a component is rerendered the interface is recalculated

When the state of the component changes, every code inside the component is executed again. 

1. When the state changes
2. When a property changes, let's say that in the Post component i receive author, publishedAt and content, if any of
these change, in the component that calls the Post component, it will also re render
3. When the father component re renders, so if a Post is father of all Comment component, when it changes, the comment
will also re render