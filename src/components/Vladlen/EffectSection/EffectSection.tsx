import { useEffect, useState, useCallback } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { User } from "../../../interface/interface";
import style from "./EffectSection.module.css";
import useInput from "../../../hooks/userInput";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const input = useInput();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);
  // async function fetchUsers () {
  //   setLoading(true);
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const users:User[]  = await response.json();
  //   setUsers(users);
  //   setLoading(false)
  // }

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function toggleModal() {
    setModal((prev) => !prev);
  }

  return (
    <>
      <h3>Effect</h3>
      <Button onClick={toggleModal}>Открыть</Button>
      <Modal open={modal} toggleModal={toggleModal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          repudiandae nulla autem numquam sint fugit nesciunt, a voluptate
          doloribus odit id totam ut commodi reiciendis accusantium beatae
          placeat voluptas expedita.
        </p>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
        <input type="text" className="control" {...input}/>
        <ul className={style.userList}>
          {users.filter(user=>user.name.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())).map((user) => (
            <li key={user.id} className={style.userItem}>
              {user.name}
            </li>
          ))}
        </ul>
        </>
      )}
    </>
  );
}
