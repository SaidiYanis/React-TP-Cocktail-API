import { Link } from 'react-router-dom';

const cardStyles = {
    link: {
        width: '240px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        padding: '16px',
        marginBottom: '24px',
        border: '7px solid #000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        backgroundColor: '#fff',
        color: 'black', // Ajouter cette ligne pour définir la couleur du texte en blanc
    },
    title: {
        fontSize: '20px', // Réduire la taille du titre
        fontWeight: 'bold',
        paddingBottom: '8px', // Réduire l'espacement sous le titre
        textAlign: 'center', // Centrer le texte du titre
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Ajouter "..." lorsque le texte dépasse
        whiteSpace: 'nowrap', // Empêcher le texte de passer à la ligne
        maxHeight: '40px', // Hauteur maximale pour les titres
    },
    imageContainer: {
        width: '100%',
        height: '160px', // Réduire la hauteur de la boîte de l'image
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex', // Utiliser flex pour centrer l'image
        justifyContent: 'center', // Centrer l'image horizontalement
        alignItems: 'center', // Centrer l'image verticalement
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%', // Ajuster la taille de l'image pour qu'elle tienne dans la boîte
        objectFit: 'cover',
        borderRadius: '20px',
        transition: 'transform 0.5s ease',
    },
    instructionsContainer: {
        maxHeight: '80px', // Hauteur maximale pour les instructions
        overflow: 'hidden', // Masquer le texte dépassant
    },
    instructions: {
        paddingTop: '8px', // Réduire l'espacement au-dessus des instructions
        textAlign: 'center', // Centrer le texte des instructions
    },
};

const CocktailList = ({ cocktailIdProp, cocktailNameProp, cocktailInstructionsProp, cocktailThumbProp }) => {
    return (
        <Link to={`/cocktails/details/${cocktailIdProp}`} style={cardStyles.link}>
            <div style={cardStyles.imageContainer}>
                <img src={cocktailThumbProp} alt={cocktailNameProp} style={cardStyles.image} />
            </div>
            <h3 style={cardStyles.title}>{cocktailNameProp}</h3>
            <div style={cardStyles.instructionsContainer}>
                <p style={cardStyles.instructions}>{cocktailInstructionsProp}</p>
            </div>
        </Link>
    );
};

export default CocktailList;
