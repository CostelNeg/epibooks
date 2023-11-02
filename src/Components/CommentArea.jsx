import {useState, useEffect} from 'react'
import {Alert,Spinner} from 'react-bootstrap'
import CommentList from './CommentList'
import AddComments from './AddComments'


const Error = () => (
    <Alert variant="danger">Errore - Stai utilizzando il tuo Bearer token?</Alert>
  )
const Loading = () => (
    <Spinner animation="border" variant="success" className="mt-2" />
  )

const  CommentArea = ({asin})=>{
    
    const [comment, setComments] =useState([]);
    const [isLoading, setLoadind] =useState(false);
    const [IsError, SetError] = useState(false);

    useEffect(() =>{
        const getComments = async () =>{
            setLoadind(true)
            try{
                let risposta = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers:{
                        Authorization :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiZWRlZmRkN2I3MTAwMTRhMzEzYTYiLCJpYXQiOjE2OTg5MzIyMjYsImV4cCI6MTcwMDE0MTgyNn0.junZAOPaa6L0vo2_D7TelZDEqZP-nJ46MasvW12_Q80"
                    },
                }
                )
                if(risposta.ok){
                    let comment= await risposta.json()
                    setComments(comment)
                    setLoadind(false)
                    SetError(false)
                }else{
                    console.log('error')
                    setLoadind(false)
                    SetError(true)
                }
            }catch(error){
                console.log(error)
                setLoadind(false)
                SetError(true)
            }
        }
        if(asin){
            getComments()
        }
    }, [asin])

    return(
        <div className='text-center'>
            {isLoading && <Loading />}
            {IsError && <Error />}
            <AddComments asin={asin}/>
            <CommentList commentoShow={comment} />
        </div>
    )
} 
export default CommentArea