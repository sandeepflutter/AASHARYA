import React from 'react';
 
function info (props){
  return (
    <div>
<p> {props.title}</p>
<p> {props.detail} </p>
<p> {props.date}</p>
<p> {props.work} </p>
<p> {props.img1}</p>
     </div>
  )
}
export default info;