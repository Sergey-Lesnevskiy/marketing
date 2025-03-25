
import { useState } from "react";
import Button from "../Button/Button";

export default function StateFunction() {

  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function toggleError() {
    setForm((prev) => ({
      ...prev,
      hasError: !prev.hasError
    }));
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    // так нужно прописывать все поля
    // setForm({
    //   name: target.value,
    //   hasError: target.value.trim().length === 0,
    //   reason: form.reason,
    // });
    // prev даёт возможность добавлять неизменяемые поля
    setForm((prev) => ({
      ...prev,
      name: target.value,
      hasError: target.value.trim().length === 0,
    }));
  };
  const handleReasonChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const target = e.target;
    setForm({ ...form, reason: target.value });
  };
  return (
    <>
      <Button onClick={toggleError}>Toggle Error</Button>
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
            value={form.name}
            onChange={handleNameChange}
            style={{ border: form.hasError ? "1px solid red" : undefined }}
          />
          <br />
          <label htmlFor="reason" className="label">
            Причина обращения
          </label>
          <br />
          <select
            id="reason"
            className="control"
            value={form.reason}
            onChange={handleReasonChange}
          >
            <option value="help">Нужна помощь</option>
            <option value="error">Ошибка</option>
            <option value="suggest">Предложение</option>
          </select>
          <br />
          <pre>{JSON.stringify(form, null, 2)}</pre>
          <Button disabled={form.hasError} isActive={!form.hasError}>
            Отправить
          </Button>
        </form>
      </section>
    </>
  );
}
