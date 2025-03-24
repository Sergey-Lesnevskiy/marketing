import { useState } from "react";
// import { SecondSectionProps } from "../../interface/interface";
import Button from "../Button/Button";

const SecondSection= () => {
  const [content, setContent] = useState<string | null>(null);
  const handleClick = (param: string): void => {
    setContent(param);
  };
  return (
    <section className="second_section">
      <Button
        isActive={content === "param 1"}
        text={"click"}
        onClick={() => handleClick("param 1")}
      >
        Children
      </Button>
      <Button
        isActive={content === "param 2"}
        onClick={() => handleClick("param 2")}
      >
        Вторая кнопка
      </Button>
      <Button
        isActive={content === "param 3"}
        onClick={() => handleClick("param 3")}
      >
        Третья кнопка
      </Button>
      {!content && <p>нажми на кнопку</p>}
      {content && <p>{content}</p>}
    </section>
  );
};

export default SecondSection;
