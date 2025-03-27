// import { useState } from "react";
import { useEffect, useReducer, useRef } from "react";
import Button from "../../components/Vladlen/Button/Button";
import { AppState, CounterId, DecrementAction, IncrementAction, store } from "./Redux/createStore";
import { DECREMENT, INCREMENT } from "./Redux/type";
// import { createStore } from "./Redux/createStore";
// // import {createStore} from 'redux';
// import { rootReducer } from "./Redux/rootReducer";
// import { decrement, increment } from "./Redux/actionCreater";
// import thunk from 'redux-thunk';
// import { applyMiddleware } from "redux";


// import style from './VladlenReact.module.css'
const VladlenRedux: React.FC = () => {

// const [,forceUpdate] = useReducer((x)=>x+1,0);


  // useEffect(()=>{
  // const unsubscride = store.subscribe(()=>{
  //   forceUpdate();
  // })
  // return unsubscride;
  // },[])
  return (
    <main 
    // className = {!theme?'dark':'white'}
    >
      <Button 
      // onClick={handleClickChangeTheme}
      >Сменить тему</Button>
      <Counter counterId="first"></Counter>
      <Counter counterId="second"></Counter>
      {/* <h5>
        Счетчик: <span id="counter">{store.getState().counter}</span>
      </h5>
      <Button id="add" onClick={()=>{store.dispatch({type:INCREMENT} satisfies IncrementAction)}}>
        Добавить
      </Button>
      <Button id="sub" onClick={()=>{store.dispatch({type:DECREMENT} satisfies DecrementAction)}}>
        Убрать
      </Button> */}
      {/* <Button id="async" onClick={handleClickAsync}>
        Async
      </Button> */}
    </main>
  );
};

const selectCounter = (state: AppState, counterId: CounterId) => state.counters[counterId]

export function Counter({counterId}:{counterId: CounterId}){
  const [,forceUpdate] = useReducer((x)=>x+1,0);
  console.log('render',counterId);
  
// получаем laststate черег ref

const lastStateRef = useRef<ReturnType<typeof selectCounter>>(undefined);

  useEffect(()=>{
    // мы не можем подписаться на изменения кусочка состояния
    // при иммутабельном обновлении нужно сравнить ссылки
    // точечное обновление в редакс
    // рендер только измененного компонента
  const unsubscride = store.subscribe(()=>{
    const currentState = selectCounter(store.getState(),counterId);
    const lastState = lastStateRef.current;
    if(currentState!==lastState){
      console.log(true);
      forceUpdate();
    }
    lastStateRef.current = currentState;
  })
  return unsubscride;
  },[]);
  const counterState = selectCounter(store.getState(),counterId);


  return(
    <>
    <h5>
        Счетчик: <span id="counter">{counterState?.counter}</span>
      </h5>
      <Button id="add" onClick={()=>{store.dispatch({type:INCREMENT,payload:{counterId}} satisfies IncrementAction)}}>
        Добавить
      </Button>
      <Button id="sub" onClick={()=>{store.dispatch({type:DECREMENT,payload:{counterId}} satisfies DecrementAction)}}>
        Убрать
      </Button>
    </>
  )
}


export default VladlenRedux;
