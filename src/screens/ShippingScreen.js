import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import FormContainer from "../components/FormContainer"
import { saveShippingAddress } from "../actions/cartActions"

const ShippingScreen = () => {
    const cart = useSelector((state => state.cart))
    const { shippingAddress } = cart

    const history = useHistory()
    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        required
                        onChange={(e) => { setAddress(e.target.value) }}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        required
                        onChange={(e) => { setCity(e.target.value) }}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="postal code">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter postal code"
                        value={postalCode}
                        required
                        onChange={(e) => { setPostalCode(e.target.value) }}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country"
                        value={country}
                        required
                        onChange={(e) => { setCountry(e.target.value) }}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
