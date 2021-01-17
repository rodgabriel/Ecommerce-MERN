import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <small className="mr-2">&#10102;</small> Sign In
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <span className="mr-2">&#10112;</span> Sign In
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <small className="mr-2">&#10103;</small>Shipping
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <span className="mr-2">&#10113;</span>Shipping
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <small className="mr-2">&#10104;</small>Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <span className="mr-2">&#10114;</span>Payment
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <small className="mr-2">&#10105;</small>Place order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <span className="mr-2">&#10115;</span>Place order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
