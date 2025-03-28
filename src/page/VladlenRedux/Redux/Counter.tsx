import { useDispatch } from "react-redux";
import Button from "../../../components/Vladlen/Button/Button";
import { CounterId, DecrementAction, IncrementAction, selectCounter, useAppSelector } from "./createStore";
import { DECREMENT, INCREMENT } from "./type";

export function Counter({counterId}:{counterId: CounterId}){
  const dispatch = useDispatch();
    console.log('render',counterId);

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
