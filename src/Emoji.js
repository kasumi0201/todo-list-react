import React from 'react';

const emojiFor = (emotion,cat) =>{
  const index = cat ? 1:0
  switch(emotion){
    case "happy":
    return ['😂','😄'][index]

    case "sad":
    return ['😆','😄'][index]

    default:
    return ['❄️',null][index]
  }
}

function Emoji({emotion,cat}){
  return <div>{ emojiFor (emotion,cat)}</div>
}

function Emojis({children, cat}){
  // const children = props.children;
   cat = !!cat
  // console.log(cat)
  return  (
    <div>
    {
      children.map((child,index)=>(
        <div key={index}>
        <Emoji emotion= {child.props.emotion}/>


        </div>
      ))
      }
      </div>
    )
  }




  //App.jsで<Emojis></Emojis>で囲みたい場合は、import { Emoji,Emojis }にして、export { Emoji,Emojis }にして、functionを作る(上)。
  //propsが何か知りたい場合は、console.log(props)をfunctionの中に入れてブラウザのconsoleで確認

  export { Emoji,Emojis }
