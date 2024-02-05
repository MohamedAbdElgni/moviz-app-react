import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegPage() {
    return (
        <div className='contanier w-50 m-auto mt-3 border border-light p-4 shadow-lg rounded '>
            <Form>
                <h2>Register Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your user name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree on terms" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-center  " controlId="formBasicCheckbox">
                    <Button variant="primary" type="submit" className='w-50 rounded-0 shadow-lg rounded'>
                    Register
                    </Button>
                </Form.Group>

            </Form>
        </div>
    );
}

export default RegPage;