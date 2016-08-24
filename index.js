const createState = date => ({time: `${date.getMinutes()}:${date.getSeconds()}`});

// REDUX
const createTimeAction = () => ({
  type: 'UPDATE_TIME',
  payload: {
    date: new Date()
  }
});

const initialState = createState(new Date());
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return Object.assign({}, state, createState(action.payload.date));
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

const interval = setInterval(() => store.dispatch(createTimeAction()), 2000);

ReactDOM.render(
  React.createElement(ReactRedux.Provider, {store}, React.createElement(App)),
  document.getElementById('app')
);
