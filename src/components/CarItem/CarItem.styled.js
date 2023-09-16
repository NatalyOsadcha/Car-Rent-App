import styled from 'styled-components';

export const Item = styled.li`
 width:274px;
 height:426px;
 position:relative;
`;

export const Photo = styled.img`
width:274px;
height:268px;
object-fit:cover;
border-radius:14px;
margin-bottom:14px;
`

export const ModelWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom:8px;`

export const Title = styled.h3`
font-size:16px;
line-height: 1,5;
font-weight:500;
color:#121417;
`

export const Span = styled.span`
color: #3470FF;`

export const Price = styled.span`
font-size:16px;
line-height: 1,5;
font-weight:500;
color:#121417;
`

export const Text = styled.p`
font-size:12px;
line-height: 1,5;
font-weight:400;
color:rgba(18, 20, 23, 0.5);
`
export const Button = styled.button`
position:absolute;
bottom: 20px;
font-size:14px;
font-weight:600;
color: #FFFFFF;
padding-top:12px;
padding-bottom:12px;
padding-left:99px;
padding-right:99px;
background-color:#3470FF;
border:none;
border-radius: 12px;
font-family:inherit;
&:hover, &:focus{
    background-color:#0B44CD;
}`

export const Heartbutton = styled.button`
position:absolute;
right:10px;
top:10px;
border:none;
background-color: transparent;
padding:5px;
cursor: pointer;`

