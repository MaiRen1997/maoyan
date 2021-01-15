import styled from 'styled-components';

const SelectBarStyle = styled.div`
 height: 44px;
 display:flex;
 border-bottom:1px solid #333;
 .address{
   /* width:90px; */
   display:flex;
   justify-content:center;
   align-items:center;
   /* background:pink; */
   flex:1;
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
      background:pink;
      font-size:14px;
      a{
        background:red;
      }
    }
  .active{
      color:#e54847;
    }
 }
 .search{
   display:flex;
   /* width:45px; */
   flex:1;
   justify-content:center;
   align-items:center;
   /* background:lightblue; */
 }
`
export {
  SelectBarStyle
}