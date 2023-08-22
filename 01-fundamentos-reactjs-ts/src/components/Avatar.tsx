
import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  hasBorder?: boolean;

}

export function Avatar({ src, hasBorder, ...rest }: AvatarProps) {
  
  const hasBorderConst = hasBorder !== false;

  return (<img className={hasBorderConst ? styles.avatarWithBorder : styles.avatar} src={src} {...rest} />)
}