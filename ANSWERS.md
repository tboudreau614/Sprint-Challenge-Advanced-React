- [ ] Why would you use class component over function components (removing hooks from the question)?

The primary reason you would implement class components as opposed to functional components is because class components have the ability to hold state/data. When state updates, render is called and state gets passed around within props and changes whenever the props change.

- [ ] Name three lifecycle methods and their purposes.

The three lifecycle methods are mounting, updating and un-mounting. The mounting phase is when the component is first created. The updating phase is when setState is able to be used to change the state data of the component and then render is called to display the component in your application. Un-mounting is when the component is finally removed from the app, thus it is no longer available to display or use.

- [ ] What is the purpose of a custom hook?

Custom hooks are useful because they provide reusable stateful logic that you can use within your app that are specified for the purpose of your app. Custom hooks work through JS and pass initial values around through parameters within your app.

- [ ] Why is it important to test our apps?

Testing our apps is important because it allows us to get rid of bugs early on before any users come into contact with them, which makes testing absolutely essential to produce high-quality applications that last longer and have the most maintainable code possible.