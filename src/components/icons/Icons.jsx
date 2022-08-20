import IconsSVG from '../../img/icon/sprite.svg';

function Icons({className, alt, name}) {

  return(
    <svg className={className} alt={alt}>
        <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
    )
}

export default Icons;