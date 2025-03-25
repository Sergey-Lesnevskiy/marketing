import { useRef, useState } from "react"

export default function UseRefSection(){
  // useRef нужен для добавления вывода на экран по нажатию на кнопку
  // useState вызывает новый цикл рендаринга, а useRef не вызывает новый цикл редаринга
  const input = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      setShow(prev=>!prev);
      console.log();
    }
  }
  
  return (
    <div>
      <h3>Input value:{show&&(input.current && input.current.value)}</h3>
      <input type="text" className="control" ref={input} onKeyDown={handleKeyDown} />
    </div>
  )
}