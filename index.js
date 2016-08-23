const createState = date => ({time: `${date.getMinutes()}:${date.getSeconds()}`});

// REDUX
const updateTimeAction = {type: 'UPDATE_TIME'};
const reducer = (state = createState(new Date()), action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return createState(new Date());
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// REACT
const Child = ReactRedux.connect(s => s)(
  props => React.DOM.div({className: 'stay'}, `child: ${props.time}`)
);

const App = ReactRedux.connect(s => s)(
  props => React.createElement(React.addons.CSSTransitionGroup, {
    transitionName: 'example',
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500
  }, React.createElement(Child, {key: props.time}))
);

const interval = setInterval(() => store.dispatch(updateTimeAction), 2000);

ReactDOM.render(
  React.createElement(ReactRedux.Provider, {store}, React.createElement(App)),
  document.getElementById('app')
);
