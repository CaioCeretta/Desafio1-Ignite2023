# There are 2 main moments when we must create a component

1 - When something repeats itself
2 - When i can take off something from a bigger component, without making the component to stop working, this turns the
component cleaner and easier to receive maintenance

For example
I have a page that will list all the users of the db
Let's say that on this page i have a button to add users through an excel file to mass upload users to the db
This upload button has a specific functionality, we must identify when the client clicked on it to open the window to
select the file, and when the user selects one, we must make the upload of this file to our backend do the processing,
register on the db, and so on. The upload button has a whole functionality that doesn't interfere with the user listing.
This is the second case, you can use that upload button in a component, even though it may not be used on various other
places in the application, we can use this because or user listing will become cleaner, to give maintenance on the user
list we don't have to have the whole upload logic on the same file, we break down that logic in another component so
they are cleaner to give maintenance, these are the two biggest moments where we  create a component in react.
 