// types/props.ts

// Define the props for BtnPrimary component
export interface BtnProps {
  text: string;
  link: string;
  hideNav?: () => void;
}

// Define the props for BtnIcon component (if needed)
export interface BtnIconProps {
  icon: JSX.Element;
  text: string;
  link: string;
  hideNav?: () => void;
}
export type dropdownProps = {
  // details: string;
  description: string;
};
