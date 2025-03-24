import { useState } from "react";
import FirstSection from "../../components/FirstSection/FirstSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import TabSection from "../../components/TabSection/TabSection";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";

const Vladlen: React.FC = () => {
  const [tab, setTab] = useState("feedback");

  return (
    <main>
      <TabSection active={tab} onChange={(current)=>setTab(current)}></TabSection>
      {tab === "main" && (
        <>
          <FirstSection></FirstSection>
          <SecondSection></SecondSection>
        </>
      )}
      {tab === 'feedback'&& <FeedbackSection></FeedbackSection>}
    </main>
  );
};

export default Vladlen;
