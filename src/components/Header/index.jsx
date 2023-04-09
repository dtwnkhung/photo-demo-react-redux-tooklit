import { Fragment } from "react";
import { Container } from "reactstrap";

function Header() {
    return (
        <Fragment>
            <header className="p-3 shadow">
                <Container>
                    <div className="d-flex align-items-center jusfity-content-between">
                        <h2 className="fw-bold text-capitalize">Photo App</h2>
                    </div>
                </Container>
            </header>
        </Fragment>
    );
}

export default Header;