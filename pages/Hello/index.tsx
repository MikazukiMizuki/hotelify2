import React from 'react'
import { Page } from '../../types'

const Hello : Page = () => {
  return (
    <div>Hello</div>
  )
}

Hello.getLayout = (page) => (<>1{page}2</>);

export default Hello
