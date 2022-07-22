import Icons from "../Icons";

function Control({className, name, secondClassName}) {
    return (
      <div className={`${className} ${secondClassName}`}>
        <Icons className={`${className}-svg`} alt={name} name={name}/>
      </div>
    );
  }
  
export default Control;