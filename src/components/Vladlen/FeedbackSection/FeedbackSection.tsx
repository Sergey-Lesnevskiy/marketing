import { useState } from "react";
import Button from "../Button/Button";
import "./FeedbackSction.css";
export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false);
  

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    setName(target.value);
    setHasError(target.value.trim().length === 0)
  };
  const handleReasonChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const target = e.target;
    setReason(target.value);
  };
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name" className="label">
          Ваше имя
        </label>
        <br />
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{border:hasError ?'1px solid red': undefined}}
        />
        <br />
        <label htmlFor="reason" className="label">
          Причина обращения
        </label>
        <br />
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={handleReasonChange}
        >
          <option value="help">Нужна помощь</option>
          <option value="error">Ошибка</option>
          <option value="suggest">Предложение</option>
        </select>
        <br />
        <pre>
          Name: {name}
          <br></br>
          Reason: {reason}
        </pre>
        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  );
}
