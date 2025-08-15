import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

export function Landing() {
    return (
        <section>
            <img
                className="selfie"
                src="../public/selfie.JPG"
                alt={'Lavleen Bhachu'}
            />
            <p>
                Hello! This is Lavleen, a 4th year student at the University of Toronto. She is studying Computer Science,
                Mathematics, and Professional Writing. Lavleen also loves to illustrate, both visually and traditionally. Many
                of her art and programming endeavours feature themes of girlhood and nostalgia. 
            </p>
        </section>
    );
}