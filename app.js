//the whole state of your app is stored in an object
//tree inside a single store.
//The only way to change the state tree is to emit an action, an object describing what happened.
//To specify how the actions transform the state tree, you write pure reducers.

const store = Redux.createStore(counter);
const valueEl = document.getElementById('value');

console.log('store', store);

function render() {
  valueEl.innerHTML = store.getState().toString()
}


document.getElementById('increment')
  .addEventListener('click',  () => {
    store.dispatch(INCREMENT)
  })

document.getElementById('decrement')
  .addEventListener('click', () => {
    store.dispatch(DECREMENT)
  })

document.getElementById('incrementIfOdd')
  .addEventListener('click', () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch(INCREMENT)
    }
  })

document.getElementById('incrementAsync')
  .addEventListener('click',  ()=> {
    setTimeout(function () {
      store.dispatch({ type: 'INCREMENT' })
    }, 1000)
  })

  render()
  store.subscribe(render)