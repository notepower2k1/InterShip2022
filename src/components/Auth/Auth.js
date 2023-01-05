import React, { useState } from "react";

import Register from "./Register";
import Login from "./Login";

const Auth = () => {
	
    const [isRegistered,setIsRegistered] = useState(false);

    return (
        <div className="row merged">
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				<div className="land-featurearea">
					<div className="land-meta">
						<h1>Winku</h1>
						<p>
							Winku is free to use for as long as you want with two active projects.
						</p>
						<div className="friend-logo">
							<span><img src="images/wink.png" alt=""/></span>
						</div>
					</div>	
				</div>
			</div>
		
      		<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				<div className="login-reg-bg">  
					{
						!isRegistered
						? 	<div className="log-reg-area sign">
								<Login onSetIsRegistered={setIsRegistered} />
							</div>
						:	<div className="log-reg-area">
								<Register onSetIsRegistered={setIsRegistered} />
							</div>
					}
				</div>
			</div>
		</div>
    )
}

export default Auth;