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
max-width:224px;
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
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`

export const MileWrapper = styled.div`
display:flex;
`

export const InputMile = styled.input`
font-family: Manrope;
font-size:18px;
font-weight: 500;
color: #121417;
background-color: #F7F7FB;
border:none;
padding: 14px 18px;
cursor: pointer;
width:160px;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`

export const Button = styled.button`
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
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
transition: transform 0.3s ease-in-out; 
cursor: pointer;
&:hover, &:focus{
    background-color:#0B44CD;
     transform: scale(1.1);
}`

export const ErrorsMessage = styled.p`
  margin-bottom: 5px;
  color: #ea3d65;
  font-size: 12px;
  line-height: 1.29;
  font-weight: 500;
`;

export const NotAvailableWrapper = styled.div`

`

export const Message = styled.p`
text-align: center;
padding-top: 150px;
font-size:36px;
font-weight: 600px;
color: #121417;
`
