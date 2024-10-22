import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from 'antd';
import { cartCreate } from "../CartContext";



const DetailPageCard = () => {
    const [details, setDetails] = useState("");
    const { _id } = useParams();

    const {addCart, setCart} = useContext(cartCreate)


    const addCard = () => {
        const newCart = [...addCart, details]
        setCart(newCart)
    }

        const removeCard = () => {
            const newCart =addCart.filter(item => item._id !== details._id)
            setCart(newCart)
        }


    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get(`https://backend-crud-one.vercel.app/product/${_id}`);
                setDetails(response.data);
                
            }
            catch (err) {
                console.log(err);
                // Show error message here if necessary.
            }
    
        }
        fetching();
    }, [_id]);

    // Check if `details` is loaded properly before rendering the card
    if (!details || !details._id) {
        return <div>Loading...</div>; // Show a loading message or skeleton UI
    }

    return (
        <>
            <div className="container my-5 py-5 " key={details._id} >
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center position-relative"
                    
                    >
                        <Card
                            className=' mx-0 mx-sm-2'
                            hoverable
                            style={{
                                width: 290,
                                marginTop: '14px',
                                boxShadow:'10px 10px 10px'
                            }}
                            cover={<img alt={details.name} src={details.image} className="img-fluid" />}
                        >
                            <Card.Meta title={details.name} />
                        </Card>
                    </div>
                    <div className="col-md-6 p-4">
                        <h2>{details.name}</h2>
                        <p>{details.description}</p>
                        <h4>Price: {details.ticketprice} USD</h4>
                        <h4>Director : {details.director} </h4>
                        <h4>Release Date : {details.releasedate} </h4>
                        <h4>Budget : {details.budget} </h4>
                        <div className="my-4">
                            {addCart.some(item => item._id === details._id) ? (
                                <button className="btn btn-success me-4" onClick={removeCard}>Remove From Cart</button>) : (
                                <button className="btn btn-danger  me-4" onClick={addCard}>Add to Cart</button>
                                )}
                            <button className="btn btn-primary ">Book Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPageCard;