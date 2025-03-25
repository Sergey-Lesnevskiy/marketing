import { useState } from "react";
import FirstSection from "../../components/Vladlen/FirstSection/FirstSection";
import SecondSection from "../../components/Vladlen/SecondSection/SecondSection";
import TabSection from "../../components/Vladlen/TabSection/TabSection";
import FeedbackSection from "../../components/Vladlen/FeedbackSection/FeedbackSection";
import StateFunction from "../../components/Vladlen/StateFunction/StateFunction";
import UseRefSection from "../../components/Vladlen/UseRef/UseRefSection";
import style from './Vladlen.module.css'
import EffectSection from "../../components/Vladlen/EffectSection/EffectSection";
const Vladlen: React.FC = () => {
  const [tab, setTab] = useState("main");

  return (
    <main className={style.main}>
      <TabSection active={tab} onChange={(current)=>setTab(current)}></TabSection>
      {tab === "main" && (
        <>
          <FirstSection></FirstSection>
          <SecondSection></SecondSection>
        </>
      )}
      {tab === 'feedback'&& <FeedbackSection></FeedbackSection>}
      {tab === 'state'&& <StateFunction></StateFunction>}
      {tab === 'ref'&& <UseRefSection></UseRefSection>}
      {tab === 'effect'&& <EffectSection></EffectSection>}
    </main>
  );
};

export default Vladlen;
