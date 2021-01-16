import React from 'react';
const LeftScroll = ({ ratedList }) => {
  return (
    <div>
      <ul>
        {
          ratedList.map(item => {
            return (
              <div key={item._id}>
                <img src= { item.imgUrl } alt=""/>
                <li >{ item.title }</li>
              </div>   
              
            )
          })
        }
      </ul>
    </div>
  );
}

export default LeftScroll;