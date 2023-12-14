const footerStyles = {
    footer: {
        width: '100%',
        height: '80px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        color: '#333333',
    },
    container: {
        display: 'flex',
        height: '100%',
        padding: '0 32px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoImage: {
        height: '40px',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'uppercase',
    },
    copyright: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontStyle: 'italic',
    },
};

const Footer = () => {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.container}>               
               <div style={footerStyles.copyright}>
                    <span>&copy; Copyright Sup de Vinci</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
