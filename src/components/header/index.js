import { Nav } from "./header.styled"

const Header = () => {
    return (
        <Nav>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/240px-Orange_logo.svg.png" alt="logo" />
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </div>

        </Nav>
    )
}

export default Header;