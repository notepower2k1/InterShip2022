import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import AuthService from "../../services/auth.service";

const ConfirmAccount = () => {
    const [loading, setLoading] = useState(false);

    const { token } = useParams();
    const navigate = useNavigate();

    const handleConfirmAccount = () => {
        setLoading(true);
        AuthService.confirm(token)
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => {
                setLoading(false);
            })
        setLoading(false);
    }

    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center ">
            <h3 className="">Confirmed your account with email: (thêm sau)</h3>
            <div className="">
                <button 
                    className="mtr-btn signin mr-3" 
                    disabled={loading}
                    onClick={ handleConfirmAccount }
                >
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Confirm</span>
                </button>
            </div>
        </div>
    );
}

export default ConfirmAccount;