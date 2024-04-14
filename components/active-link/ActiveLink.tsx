'use client'
import React from 'react'
import Link from 'next/link';
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string; // Si pongo el signo de interrogación  le digo que es opcional
}

const ActiveLink = ({path, text}: Props) => {

   const pathName = usePathname() // El usePathName solo me sirve del lado del cliente

  return (
    <div>
     {/* 1. Le da el color activo  y después compara los path, si son iguales lo deja en color azul (aplica el otro estilo)  */}
      <Link href={path} className={ `${style.link} ${ (pathName === path) && style['active-link']}`}>{text}</Link>
    </div>
  )
}

export default ActiveLink
