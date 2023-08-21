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
they are cleaner to give maintenance, these are the two biggest moments where we create a component in react.

Other thing is that sometimes things that may look like they have the need of it becoming a component, just because they
SEEM to be the same thing, just because they have a text inside and a box that contains it, one may have an icon and the
other doesn't, one don't have a filling and the other has, sometimes things that look similar to us, don't necessarily
will become a component, if i were to create a component for this button, i would have to create many variation
(with icon, without icon, with background, without background, with filling, without filling and so on), i will end up
creating a little monster that sometimes is easier for us not to have this component than having a component that receives
 so many variations.
