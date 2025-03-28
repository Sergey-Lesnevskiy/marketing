
import { Counter } from "./Redux/Counter";
import { UsersList } from "./Redux/users-list";

const VladlenRedux: React.FC = () => {

  return (
    <main 
    >
      <Counter counterId="first"></Counter>
      <Counter counterId="second"></Counter>
      <br />
      <section className="users">
      <UsersList></UsersList>
      </section>
    </main>
  );
};





export default VladlenRedux;
