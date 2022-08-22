import Icons from "../../icons/Icons";

function Control({className, svgClass, name, secondClassName, onClick}) {
    return (
      <div onClick={onClick} role="presentation" className={`${className} ${secondClassName}`}>
        <Icons className={svgClass} alt={name} name={name}/>
      </div>
    );
  }
  
export default Control;