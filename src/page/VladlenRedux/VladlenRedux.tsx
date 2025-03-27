// import { useState } from "react";
// import { useEffect, useReducer, useRef } from "react";
import Button from "../../components/Vladlen/Button/Button";
import { CounterId, DecrementAction, IncrementAction, selectCounter, useAppSelector } from "./Redux/createStore";
import { DECREMENT, INCREMENT } from "./Redux/type";
import { useDispatch } from "react-redux";
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



export function Counter({counterId}:{counterId: CounterId}){
  const dispatch = useDispatch()
    console.log('render',counterId);
  // useStore
  // useSelector
//   const [,forceUpdate] = useReducer((x)=>x+1,0);
  
// // получаем laststate черег ref

// const lastStateRef = useRef<ReturnType<typeof selectCounter>>(undefined);

//   useEffect(()=>{
//     // мы не можем подписаться на изменения кусочка состояния
//     // при иммутабельном обновлении нужно сравнить ссылки
//     // точечное обновление в редакс
//     // рендер только измененного компонента
//   const unsubscride = store.subscribe(()=>{
//     const currentState = selectCounter(store.getState(),counterId);
//     const lastState = lastStateRef.current;
//     if(currentState!==lastState){
//       console.log(true);
//       forceUpdate();
//     }
//     lastStateRef.current = currentState;
//   })
//   return unsubscride;
//   },[]);

// оставили для сравнения с react-redux 

// оставили для сравнения с react-redux 


  // const counterState =  useAppSelector((state)=>state.counters[counterId]);
  const counterState =  useAppSelector((state)=>selectCounter(state,counterId));


  return(
    <>
    <h5>
        Счетчик: <span id="counter">{counterState?.counter}</span>
      </h5>
      <Button id="add" onClick={()=>{dispatch({type:INCREMENT,payload:{counterId}} satisfies IncrementAction)}}>
        Добавить
      </Button>
      <Button id="sub" onClick={()=>{dispatch({type:DECREMENT,payload:{counterId}} satisfies DecrementAction)}}>
        Убрать
      </Button>
    </>
  )
}


export default VladlenRedux;
