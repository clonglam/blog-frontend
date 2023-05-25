const About = () => {
    return (
        <div className="content">
            <p className="title">About</p>
            <p className="moto">
                {`"More I Know, more I dont konw, learn never stop"`}
            </p>

            <div className="description">
                <p>
                    Hi, I am CLong Lam. A Web Developer and Media Designer.
                    Currently bassed in Vancourver. Before this I worked in Hong
                    Kong for 4-Year.
                </p>
                <br />
                <p>
                    I love to explore new things, I did project on different
                    media, Rpi, p5js etc. If you wanna know more about me,
                    scroll down and see what I did. Cheers.
                </p>
            </div>

            <div />

            <div className="cta">
                <div className="know-more">
                    <a
                        href="https://www.linkedin.com/in/sze-long-lam-188a10233/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        know more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
