import "./assets/app.css";
import {
    Background,
    Navbar,
    Logo,
    Image,
    ImageQ,
    Menu,
    MenuButton,
    Intro,
    IntroBG,
    H1,
    Pars,
    Button,
    Bottom,
    Line,
    Forum,
    Services,
    Service,
    Album,
    Quote,
    Quotes,
    About,
    Footer,
} from "./StyledComponents";

function App() {
    return (
        <>
            <Background>
                <Navbar>
                    <Logo>
                        <Image src="logo-white.svg" />
                    </Logo>

                    <Menu>
                        <MenuButton>Home</MenuButton>
                        <MenuButton>About</MenuButton>
                        <MenuButton>Services</MenuButton>
                        <MenuButton>Contact</MenuButton>
                        <MenuButton>
                            <span className="ButtonStyled">202-555-0188</span>
                        </MenuButton>
                    </Menu>
                </Navbar>

                <IntroBG>
                    <Intro>
                        <H1>we all love</H1>
                        <H1>
                            <span className="nature">nature</span>
                        </H1>
                        <Pars>
                            Look deep into nature and you will <br /> understand everything better.
                        </Pars>

                        <Button>Get Started</Button>
                    </Intro>
                </IntroBG>
            </Background>

            <Bottom>
                <Forum>
                    <span className="Header">Our Services</span>
                </Forum>
                <Line />

                <Services>
                    <Service>
                        <Album src="service-1.jpeg" />
                        <Forum>
                            <span className="Title">Web Design</span>
                        </Forum>
                        <Forum>
                            <span className="Text">
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </span>
                        </Forum>
                    </Service>
                    <Service>
                        <Album src="service-2.jpeg" />
                        <Forum>
                            <span className="Title">Graphic Design</span>
                        </Forum>
                        <Forum>
                            <span className="Text">
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </span>
                        </Forum>
                    </Service>
                    <Service>
                        <Album src="service-3.jpeg" />
                        <Forum>
                            <span className="Title">Content Creation</span>
                        </Forum>
                        <Forum>
                            <span className="Text">
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </span>
                        </Forum>
                    </Service>
                </Services>
            </Bottom>

            <Quote>
                <ImageQ src="quotes.svg" />
                <Quotes>
                    “Original and with an innate understanding of their <br /> customer’s needs, the team at Love Nature are <br /> always a
                    pleasure to work with.”
                </Quotes>
                <ImageQ src="avatar_on_home.png" />
                <Pars>
                    <span className="Name">Jane Miller</span>
                </Pars>
            </Quote>

            <Services>
                <Service>
                    <span className="About">
                        <Pars>
                            <span className="Name">ABOUT US</span>
                        </Pars>
                        <About>
                            Tell website visitors who you <br /> are and why they should <br /> choose your business.
                        </About>
                        <Forum>
                            <span className="Text">
                                Because when a visitor first lands on your website, <br /> you’re a stranger to them. They have to get to
                                know <br /> you in order to want to read your blog posts, subscribe <br /> to your email newsletter, or buy
                                what you’re selling.
                            </span>
                        </Forum>
                        <Forum>
                            <span className="Find">Find Out More</span>
                        </Forum>
                    </span>
                </Service>

                <Service>
                    <Album src="leaf.jpeg" />
                </Service>
            </Services>

            <Footer>
                <Forum>
                    <span className="Questions">QUESTIONS?</span>
                </Forum>
                <Forum>
                    <span className="TextCenter">
                        Whether you’re curious about features, a free trial, or <br /> even press, we’re here to answer any questions.
                    </span>
                </Forum>

                <Button>Let's Talk Now</Button>
            </Footer>

            <Navbar>
                <Menu>
                    <Forum>Home</Forum>
                    <Forum>About</Forum>
                    <Forum>Serivce</Forum>
                    <Forum>Contact</Forum>
                </Menu>

                <Logo>
                    <Image src="logo-green.svg" />
                </Logo>
                <Forum>Love Nature by Tyler Moore</Forum>
            </Navbar>
        </>
    );
}

export default App;
