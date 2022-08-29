import IconsSVG from '../../img/icon/sprite.svg';
import useTheme from '../context-hook/UseTheme';

function Icons({className, alt, name, onClick}) {

  const {isLight} = useTheme()

  return(
    <svg className={className} alt={alt} onClick={onClick}>
        <use xlinkHref={isLight ? `${IconsSVG}#icon-${name}-light` : `${IconsSVG}#icon-${name}`} />
    </svg>
    )
}

export default Icons;