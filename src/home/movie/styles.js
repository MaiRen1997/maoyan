import styled from 'styled-components';

const SelectBarStyle = styled.div`
 height: 44px;
 display:flex;
 border-bottom:1px solid #333;
 .address{
   width:70px;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:14px;
 }
 ul {
    width: 240px;
    display: flex;
    height:100%;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:14px;
    }
    li:nth-last-child(1){
      flex:1.5;
    }
  .active{
      /* color:#e54847; */
      height:44px;
      line-height:44px;
      font-size:17px;
      font-weight:bolder;
      border-bottom:2px solid #e54847;
    }
 }
 .search{
   display:flex;
   width:60px;
   justify-content:center;
   align-items:center;
   color:#e54847;
   font-weight:bolder;
   font-size:30px;
 }
`
export {
  SelectBarStyle
}