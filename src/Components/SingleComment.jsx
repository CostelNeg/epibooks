import {Button, ListGroup} from 'react'

const SingleComment = ({comment}) => {
    const deleteComm = async (asin)=>{
        try{
            let risposta =await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + asin,
            {
                method:'DELETE',
                headers:{
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiZWRlZmRkN2I3MTAwMTRhMzEzYTYiLCJpYXQiOjE2OTg5MzIyMjYsImV4cCI6MTcwMDE0MTgyNn0.junZAOPaa6L0vo2_D7TelZDEqZP-nJ46MasvW12_Q80",
                },
            }
            )
            if(risposta.ok){
                alert('Recensione cancelata')
            }else{
                throw new Error('Ops recensione ancora la')
            }
        }catch(error){
            alert(error)
        }
    }

    return(
        <ListGroup.Item>
            {comment.comment}
            <Button
            variant="primary"
            classname="ms-1"
            onClick= {()=>deleteComm(comment._id)}>
                CAncella
            </Button>
        </ListGroup.Item>
    )
}
export default SingleComment    