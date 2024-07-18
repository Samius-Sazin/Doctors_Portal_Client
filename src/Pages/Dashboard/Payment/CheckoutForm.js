/* eslint-disable no-unused-vars */
import { CircularProgress, Typography } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../Hooks/useAuth';

function CheckoutForm({ appointment }) {
    const { cost, _id } = appointment;
    const { user } = useAuth();

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch(`https://doctors-portal-server-wg85.onrender.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cost }),
        })
            .then(response => response.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [cost])


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            // console.log(paymentMethod);
        }

        // Payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            setSuccess('Payment is Successful.')
            setProcessing(false);

            const payment = {
                amount: paymentIntent?.amount,
                transactionId: paymentIntent?.id,
                created: paymentIntent?.created,
            }

            // save to DB
            fetch(`https://doctors-portal-server-wg85.onrender.com/appointments/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing
                        ?
                        <CircularProgress />
                        :
                        <button type="submit" disabled={!stripe || success}>
                            Pay ${cost}
                        </button>
                }
            </form>

            {
                error && <Typography variant='h5' sx={{ color: "red" }}>{error}</Typography>
            }
            {
                success && <Typography variant='h5' sx={{ color: "green" }}>{success}</Typography>
            }
        </div>
    )
}

export default CheckoutForm
