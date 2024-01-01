import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className="item-img" src="https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzMTM3MHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDc4LzE2MjU1MjQwODMxMDA2LmpwZ3xiYzhjMzQ5ODEwM2JhYTRiYWFmYzBhZDBkMDFhNjYzNWY1NDBkMzc1OWZhM2FjZDg0ZjAwM2MzZTE3OTU2N2Zi" />
      <h2>Win</h2>
    </div>
  )
}

export default Box