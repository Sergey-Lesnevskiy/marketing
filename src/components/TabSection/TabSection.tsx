import { TabSectionProps } from "../../interface/interface";
import Button from "../Button/Button";

  const TabSection: React.FC<TabSectionProps> = ({ active,onChange}) => {
  return(
    <section style={{marginBottom: '1rem'}}>
      <Button isActive={active ==='main'} onClick={()=>onChange('main')}>Главная</Button>
      <Button isActive={active ==='feedback'} onClick={()=>onChange('feedback')}>Обратная связь</Button>
    </section>
  )
}
export default TabSection;