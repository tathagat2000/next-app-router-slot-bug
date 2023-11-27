'use client'

import Crypto from 'crypto-js';

const ClientComp = () => {
    console.log(Crypto.SHA256('Message'), 'crypto log')
    return (
        <div>
            hello from client
        </div>
    );
};

export default ClientComp;