import React ,{useState, useEffect} from "react";
import "./styles.css"


const ModalPortal = (props)=>{
    const response = {messagge: "Terminaste la cuenta atrás"};
    const [resp, setResp] = useState("")
    const removeModal =()=>{
        props.setModalOpen(false)
    }
    useEffect(()=>{
        if(response.messagge){
            try {
                setResp(response.messagge)
            } catch (error) {
                console.log(error)
            }
        }
    },[])
    
    return (
        <div className="modal">
            <h3>{resp}</h3>
            <span onClick={removeModal}>✖</span>
        </div>
    )
};

export default ModalPortal;