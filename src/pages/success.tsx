import Image from 'next/image'
import React from 'react'
import { SuccessContainer, ImageContainer } from '../styles/pages/success'

import logoImg from '../assets/logo.svg'
import Link from 'next/link'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <Image src={logoImg} alt='' width={114} height={106} />
      </ImageContainer>
      <p>
        Uhuul <strong>Camila Nepomuceno</strong>, sua{' '}
        <strong>Camiseta Beyond</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
