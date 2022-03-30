import { useCallback,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import {CardContext} from "../context/CardContext";
import SingleElement from "../components/SingleElement";
import {CardListContext} from "../context/CardListContext";
import  styled  from "styled-components";

const Container = styled.div`
    max-width: 720px;
    margin: auto;
    padding: 10px;
`;

const ButtonWrapper=styled.div`
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
`
const Button=styled.button`
    min-width:100px;
    background:#f04e48;
    border: none;
    padding: 5px 10px;
    color: white;
    margin-bottom:10px;
    border-radius: 4px;
    cursor:pointer;
`

const CardList = () => {
    const navigate = useNavigate();
    const navigateTo = useCallback((nav) => navigate(nav));
    const {cardLists,setCardLists}=useContext(CardListContext)
    const {setCardDetails}=useContext(CardContext)

    function editCardDetails(crdData){
        setCardDetails(crdData)
        navigateTo('/update')
    }

    return (
        <Container>
            <h1>List of Credit Cards</h1>
            <ButtonWrapper>
                <Button style={{background:'#e26f0d'}} onClick={()=>navigateTo('/addcard')}>+ Add New Cards</Button>
            </ButtonWrapper>
            {cardLists.length > 0 && cardLists.map(crd=><SingleElement cardData={crd} editCard={editCardDetails}/>)}
        </Container>
    );
  };
  
export default CardList;