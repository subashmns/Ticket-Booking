import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Typography, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { cartCreate } from "../CartContext";

const DetailPageCard = () => {
    const [details, setDetails] = useState(null);
    const { _id } = useParams();
    const { addCart, setCart } = useContext(cartCreate);
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://backend-crud-one.vercel.app/product/${_id}`);
                setDetails(response.data);
            } catch (err) {
                console.error("Error fetching movie details:", err);
            }
        };
        fetchMovieDetails();
    }, [_id]);

    if (!details) {
        return <Typography variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>Loading...</Typography>;
    }

    const addToCart = () => {
        setTicketCount(ticketCount + 1);
        setCart([...addCart, details]);
    };

    const removeFromCart = () => {
        if (ticketCount > 0) {
            setTicketCount(ticketCount - 1);
            const index = addCart.findIndex(item => item._id === details._id);
            if (index !== -1) {
                setCart(addCart.filter((_, i) => i !== index));
            }
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "120vh",
                display: "flex",
                backgroundImage: `url(${details.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                justifyContent: "center",
                alignItems: "center",
                // paddingTop: "80px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
                }
            }}
        >
            <Box
                sx={{
                    // position: "absolute",
                    // right: 0, 
                    maxWidth: "500px",
                    color: "white",
                    padding: 4,
                    borderRadius: 3,
                    zIndex: 10,
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>{details.name}</Typography>
                <Typography variant="h6">🎬 Director: {details.director}</Typography>
                <Typography variant="h6">🗓 Release Date: {details.releasedate}</Typography>
                <Typography variant="h6">💰 Budget: ${details.budget}</Typography>
                <Typography variant="h5" sx={{ color: "#ff5555", mt: 2 }}>🎟 Ticket Price: ${details.ticketprice}</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                    {details.description}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
                    <IconButton
                        color="error"
                        onClick={removeFromCart}
                        disabled={ticketCount === 0}
                        sx={{ borderRadius: "50%", border: "2px solid red", color: "white" }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ mx: 2 }}>{ticketCount}</Typography>
                    <IconButton
                        color="success"
                        onClick={addToCart}
                        sx={{ borderRadius: "50%", border: "2px solid red", color: "darkgreen" }}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{ mt: 3, borderRadius: 8, }}
                    >
                        🎟 Book {ticketCount} Tickets
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailPageCard;
