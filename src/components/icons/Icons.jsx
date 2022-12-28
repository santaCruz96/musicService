import IconsSVG from '../../img/icon/sprite.svg';
import useTheme from '../context-hook/UseTheme';

function Icons({className,  name, onClick}) {

  const {isLight} = useTheme()

  return(
    <svg className={className} alt={name} onClick={onClick}>
        <use xlinkHref={isLight ? `${IconsSVG}#icon-${name}-light` : `${IconsSVG}#icon-${name}`} />
    </svg>
    )
}

export default Icons;