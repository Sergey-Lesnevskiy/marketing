export interface Product {
  albumId:number,
  id: number,
  title: string,
  url:string,
  thumbnailUrl:string, 
}

export interface ButtonProps {
  text?: string; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Типизируем onClick
  children?: React.ReactNode;
  isActive?:boolean;
}
export interface SecondSectionProps {
  handleClick: (param: string) => void; 
  content: string | null;
}
export interface TabSectionProps {
  onChange: (param: string) => void; 
  active: string;
}