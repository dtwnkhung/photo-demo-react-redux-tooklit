import { Fragment } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <header className="p-3 shadow">
                <Container className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center jusfity-content-between">
                        <h2 className="fw-bold text-capitalize">Photo App</h2>
                    </div>
                    <Link to="/sign-in">Sign in</Link>
                </Container>
            </header>
        </Fragment>
    );
}

export default Header;