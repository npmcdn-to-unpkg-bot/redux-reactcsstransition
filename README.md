# redux-reactcsstransition

**This code is meant to showcase an issue with the freezing props nature of ReactCSSTransitionGroup and the hierarchical-breaking nature of redux.** I was working on a project involving some complex animations with ReacCSSTransitionGroup that lead to to odd behavior in connection with redux.

https://jsfiddle.net/haygoodjon/wx0L0bx7/2/ displays the issue

https://jsfiddle.net/haygoodjon/wx0L0bx7/1/ shows a less than adequate workaround

Opened a corresponding stack overflow question to see if community has explored any other options http://stackoverflow.com/questions/39112719/react-redux-vs-reactcsstransitiongroup
