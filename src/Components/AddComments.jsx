import { useEffect, useState } from "react"
import { Form,Button } from "react-bootstrap"
 
const AddComments=({asin}) =>{
    const [comment,setComments] = useState({
        comment : '',
        rate :1,
        elementId: null,
    })

    useEffect(() => {
        setComments((comment)=>({
            ...comment,
            elementId:asin,
        }))
    },[asin])

    const sendComment = async(e)=>{
        e.preventDefault()
        try{
            let risposta = await fetch('https://striveschool-api.herokuapp.com/api/comments',
            {
                method:'POST',
                body:JSON.stringify(comment),
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiZWRlZmRkN2I3MTAwMTRhMzEzYTYiLCJpYXQiOjE2OTg5MzIyMjYsImV4cCI6MTcwMDE0MTgyNn0.junZAOPaa6L0vo2_D7TelZDEqZP-nJ46MasvW12_Q80",
                },
            }
        )
        if(risposta.ok){
            alert('Recensione mandata')
            setComments({
                comment:'',
                rate:1,
                elementId:null
            })
        } else{
            throw new Error('Invio non riuscito')
        }
        }catch(error){
            alert(error)
        }
    }

    return(
        <div className="my-2">
            <Form onSubmit = {sendComment}>
                <Form.Group className="mb-2">
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Inserisci la tua recensione"
                    value={comment.comment}
                    onChange={(e) => setComments({
                        ...comment,
                        rate: e.target.value
                    })
                }/>
                </Form.Group>
                <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComments({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
            </Form>
        </div>
    )
}
export default AddComments