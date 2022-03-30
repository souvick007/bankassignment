import  styled  from "styled-components";

const ButtonWrap=styled.button`
    min-width:100px;
    background:#f04e48;
    border: none;
    padding: 5px 10px;
    color: white;
    margin-bottom:10px;
    border-radius: 4px;
    cursor:pointer;
`

const Button = (props) => {
    return <ButtonWrap {...props} type="submit">{props.title}</ButtonWrap>
  };
  
export default Button;


