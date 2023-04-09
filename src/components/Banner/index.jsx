import React, { Fragment } from "react";
import "./banner.scss"
import { Container } from "reactstrap";
function Banner(props) {
    const { title, backgroundUrl } = props;

    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {}
    return (
        <Fragment>
            <section className="banner d-flex" style={bannerStyle}>
                <Container className="m-auto text-center">
                    <h1 className="banner-title fw-bold">{title}</h1>
                </Container>
            </section>
        </Fragment>
    );
}

export default Banner;