import Icons from "../Icons";

function Control({className, svgClass, name, secondClassName}) {
    return (
      <div className={`${className} ${secondClassName}`}>
        <Icons className={svgClass} alt={name} name={name}/>
      </div>
    );
  }
  
export default Control;