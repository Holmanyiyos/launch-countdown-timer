import ReactDOM from "react-dom";

const ModalPortal = ()=>{
    return ReactDOM.createPortal(
        <div>
            <h3>Portal</h3>
        </div>
    )
};

export default ModalPortal;