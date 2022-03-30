import  styled  from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const ElementWrapper = styled.div`
    display:flex;
    margin:auto;
    min-height:100px;
    padding:10px;
    background-color:white;
    -webkit-box-shadow: 3px 9px 15px -3px rgba(0,0,0,0.1);
-moz-box-shadow: 3px 9px 15px -3px rgba(0,0,0,0.1);
box-shadow: 3px 9px 15px -3px rgba(0,0,0,0.1);
border: 1px solid lightgrey;
border-radius: 5px;
`;
const CardInfo = styled.div`
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ButtonDisplay = styled.div`
    width:20%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-end
`;

const Row=styled.div`
display: flex;
justify-content: space-between;
`
const Button=styled.button`
    width:100px;
    background:#f04e48;
    border: none;
    padding: 5px;
    color: white;
    margin-bottom:10px;
    border-radius: 4px;
    cursor:pointer;
`

const SingleElement = (props) => {
    const {cardData}=props
    return(
        <ElementWrapper>
            <CardInfo>
                <Row>{cardData.cardName}</Row>
                <Row>
                    <div>{cardData.cardNumber}</div>
                    <div>{cardData.validThrough}</div>
                </Row>
            </CardInfo>
            <ButtonDisplay>
             <Button style={{background:'#e26f0d'}} onClick={()=>props.editCard(props.cardData)}>Edit Card</Button>
             <Button >Delete Card</Button>
            </ButtonDisplay>
        </ElementWrapper>
      )  
  };
  
export default SingleElement;


