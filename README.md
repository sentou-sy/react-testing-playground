# React Testing Playground

This is just a little place where I figure out how to do things in react. I will also explore the process of testing javascript in general and react specifically. Occasionally I also write down some things that I learnt and find useful to point out. It may also help you that randomly came across this project.

## Key takeaways for testing

### Testing child components where their state is managed by the parent component

If you want to test the behaviour of a component that has its state definied in the parent component it is actually difficult to get the state in a child test. This is because the child component gets its event handlers passed by props. So the child component is not concerned with setting state but lets its parent do the work.

__The solution:__ It is sometimes better to just test the parent component and test the behaviour of the child component directly in the parent test.

__For Example:__
The two child components `<UserForm />` and `<UserList />` are both concerned with some user state. In the `<UserForm />` component is a form that can set the users firstName and age. When submitted the user obejct gets added to a collection and is rendered in the `<UserList />` component. To manage state there is a `<App />` component that uses a `useUser` Hook and a `useCollection` Hook.

In `App.test.js` we test all things related to changing state and how those changes affect the rendering. In the `UserForm.test.js` we just test if the event are being executed correctly and that the assigned event handlers have been called. In `UserList.test.js` we actually can test the rendering - at least partially. We can check if the correct amount of `li` element is present in the DOM but the content of the `li` elements is defined in a function that is passed to `<UserList />`.