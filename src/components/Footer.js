
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="Footer">
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;