import React from 'react'

export const kConvertor = (num) => {
  if(num>=100){
    return (num/1000).toFixed(1) + 'k';

  }else{
    return num;
  }
}
