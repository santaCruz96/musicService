import style from "./BurgerLine.module.css";
import useTheme from "../../context-hook/UseTheme";

function BurgerLine() {
  const {isLight} = useTheme()

    return (
      <span className={isLight ? style.burgerLineLight : style.burgerLine} />
    );
}
  
export default BurgerLine;