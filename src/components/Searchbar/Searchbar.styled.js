import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
margin-bottom:50px;
align-items: flex-end;
justify-content: center;

`
export const Label = styled.label`
display:block;
font-family: Manrope;
font-size:14px;
line-height:1,3;
font-weight: 500;
color: #8A8A89;
`

export const Input = styled.input`
font-family: Manrope;
font-size:18px;
line-height:1,1;
font-weight: 500;
color: #121417;
background-color: #F7F7FB;
border:none;
border-radius:14px;
padding: 14px 18px;
cursor: pointer;
margin-right:18px;
`

export const MileWrapper = styled.div`
display:flex;
`

export const InputMile = styled.input`
font-family: Manrope;
font-size:18px;
line-height:1,1;
font-weight: 500;
color: #121417;
background-color: #F7F7FB;
border:none;
/* border-radius-le:14px; */
padding: 14px 18px;
cursor: pointer;
`
// .custom-datalist {
//   max-height: 100px; 
//   overflow-y: auto; 

// }

export const Button = styled.button`
font-size:14px;
font-weight:600;
margin-left:18px;
color: #FFFFFF;
padding-top:14px;
padding-bottom:14px;
padding-left:40px;
padding-right:40px;
background-color:#3470FF;
border:none;
border-radius: 12px;
font-family:inherit;
&:hover, &:focus{
    background-color:#0B44CD;
}`