import { Link, useNavigate } from "react-router-dom";

const styles = {
    header: {
        width: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        color: '#333333',
    },
    headerContainer: {
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
        '@media (max-width: 600px)': {
            marginBottom: '20px',
            width: '100%',
            justifyContent: 'center',
        },
    },
    logoImage: {
        height: '40px',
        marginRight: '10px',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'uppercase',
    },
    searchForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '@media (max-width: 600px)': {
            width: '100%',
        },
    },
    searchInput: {
        border: '1px solid #333333',
        borderRadius: '20px',
        padding: '10px 20px',
        marginBottom: '10px',
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    },
    navLink: {
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#333333',
        borderRight: '1px solid #ddd',
        '@media (max-width: 600px)': {
            width: '100%',
            justifyContent: 'center',
            borderRight: 'none',
        },
        fontWeight: 'bold',
        fontSize: '18px',
    },
};

const SearchForm = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('cocktail');
        navigate(`/cocktails/search/${search.replaceAll("/", "§")}`);
    };

    return (
        <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
            <input style={styles.searchInput} type="text" name="cocktail" placeholder="Recherchez..." aria-label="Recherchez"/>
            <input type="submit" value="Envoyer" hidden />
        </form>
    );
};

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <div style={styles.logoContainer}>
                    <Link to="/" style={styles.navLink}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/437/450/original/vector-cocktail-icon.jpg" alt="Logo" style={styles.logoImage} />
                        <span style={styles.logoText}>DBCocktails</span>
                    </Link>
                </div>
                <nav style={styles.navContainer}>
                    <Link to="/" style={styles.navLink}>Accueil</Link>
                    <Link to="/cocktails" style={styles.navLink}>Nos cocktails</Link>
                    <Link to="/categories" style={styles.navLink}>Nos catégories</Link>
                    <Link to="/ingredients" style={styles.navLink}>Nos ingrédients</Link>
                    <Link to="/glasses" style={styles.navLink}>Nos verres</Link>
                </nav>
                <div>
                    <SearchForm />
                </div>
            </div>
        </header>
    );
};

export default Header;
