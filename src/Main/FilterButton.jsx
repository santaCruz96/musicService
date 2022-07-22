function FilterButton({className, text}) {
    return (
      <div className={`filter__button button-${className} _btn-text`}>
        {text}
      </div>
    );
  }
  
export default FilterButton;