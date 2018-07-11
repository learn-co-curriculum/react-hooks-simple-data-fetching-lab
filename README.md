# React: Component Mounting and Unmounting

## Objectives

1. Describe what happens in the mounting phase of a React component's lifecycle
2. Describe what happens in the unmounting phase of a React component's
   lifecycle
3. Practice performing setup and teardown actions at the appropriate point in
   the React component lifecycle.

## Overview

It's time to get motivational! In this lab, we're going to be building a simple
React app, a wall of quotes. Pulling from a provided list, we want to be able to
display a new quote automatically when the app starts, on demand whenever we
want, _and_ at a set interval of time.

Using this quote generating app, we can also get a better sense of how the
component mounting lifecycle works and be able to see some of its use cases.

Go on and run the app with `npm start`. The app is already working, but there
are some changes we need to make.

## Deliverables

To pass the tests in this lab, write componentDidMount and componentWillUnmount
methods in both `App.js` and `Card.js`.

#### App

###### `componentDidMount`

Since App is the top level component, its `componentDidMount` method will be
invoked before any other child components are even constructed.

This is a good place for taking initial actions within an app.  Actions taken
here can include mounting components. Often, components we mount here are
related to asynchronous content, such as fetched data from an API. We will
discuss async and React, but for now, in place of fetched data, we'll be using a
list of quotes provided in `src/quote.js` to populate the quote wall.

n App, write a `componentDidMount` method that invokes the existing `addQuote`
class method. If you've got it working and have the app served up on a browser
tab, you'll see that, upon refresh, a quote will be present.

The `componentDidMount` method is also sometimes used to include setInterval
or setTimeout functions when you need something to happen on a delay.

To create a setInterval, the best practice is to assign it to a variable within
the scope of our class:

```js
this.interval = setInterval(...)
```

Including the `addQuote` method within setInterval here would cause the app to
add more and more quotes at the interval you set.

###### `componentWillUnmount`

It is important to make sure that we clean up after ourselves when it comes to
intervals. Not cleaning up can cause memory leaks (meaning that system memory is
allocated to something that is no longer necessary and won't free up), as
intervals can keep firing after a component unmounts.

To clear an interval, we use the builtin `clearInterval` method, passing in the
local variable:

```js
clearInterval(this.interval)
```

Write a `componentWillUnmount` method in App that cleans up your interval if
you've created one.

#### Card

###### `componentDidMount`

By having our App's `componentDidMount` add a quote, we cause one card component
to be mounted immediately after App is mounted. Currently, on each card,
**Mounted** is written in bold font. It would be a nicer visual if we could have
this text fade out shortly after a card is mounted.

In `Card.js`, there is provided code for a setTimeout. Write a
`componentDidMount` method and include this setTimeout code.

```js
this.timeout = setTimeout(() => {
  this.setState({
    className: "hidden"
  })
}, 1900)
```

This timeout causes a state change after 1.9 seconds. In Card's `render` method,
the JSX element containing the text **Mounted** is assigned to a class name
based on state:

```html
<aside className={ this.state.className }>Mounted</aside>
```

By calling a setState in our timeout within `componentDidMount`, we can trigger
a stylistic change and cause our CSS to fade out our text.

###### `componentWillUnmount`

Including a `clearInterval` here is still good to include here. Even though the
timeout is short, it is possible to close a quote before the timeout fires
setState, which can cause errors.

You can use the `componentWillUnmount` method to handle DOM manipulation, and it
is possible to achieve the fade out effect on **Mounted** using just JavaScript
instead of a state change. This typically includes using [React refs][refs],
which are a way to get access to DOM elements directly.

Refs are generally avoided if possible, as using them excessively can can cause
performance issues. Since there is another way to handle fading, we don't need a
ref in this case, but some DOM manipulation can only be handled with refs. For
instance, if we wanted to change the scroll position on a page in order to
display a component that was just mounted, using a ref to access the DOM is
necessary.

Run `learn` to confirm you've passed the tests for adding `componentDidMount`
and `componentWillUnmount` to both App and Card.

## Conclusion

To quickly recap, the `componentDidMount` method is useful to initiating one
time or ongoing actions within the logic of a component. Some of these actions
are possible to do within a `constructor`, as well as the one mounting lifecycle
method we haven't touched upon in this lab, `static getDerivedStateFromProps`.
Even though we are dealing with very fast rendering, from a performance
standpoint, waiting until a component is mounted and displayed on the screen
_before_ firing off any custom logic is a better user experience.

It also encourages us to build apps that work even if they don't have all the
information ready yet. A React website for recipes could render up the
structure, logo and navigation of a page _first_, then go get the recipe,
instructions and images immediately after.

The `componentWillUnmount` is most often used for cleaning up ongoing processes,
such as intervals. It also could be used for sending a last bit data from a
child component up to a parent or possibly to close a websocket.

[refs]: https://reactjs.org/docs/refs-and-the-dom.html

## Resources

- [React: Component Specs and Lifecycle](https://reactjs.org/docs/react-component.html)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-component-mounting-lab'>Component Mounting Lab</a> on Learn.co and start learning to code for free.</p>
