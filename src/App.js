import HelloWorld from './HelloWorld';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  // Pour Profil
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  // Pour ListeCourses
  const fruits = ['Pomme', 'Banane', 'Orange'];
  const legumes = ['Carotte', 'Brocoli', 'Tomate'];

  return (
    <div>
      <h1>TP React MLIAEdu</h1>

      {/* Composant HelloWorld */}
      <HelloWorld />

      {/* Composant Profil */}
      <Profil utilisateur={utilisateur} taille={150} />

      <hr />

      {/* Exercices Voiture */}
      <h2>Exercice Voiture</h2>
      <Voiture marque="Peugeot" modele="208" couleur="Rouge" />
      <Voiture marque="Renault" modele="Clio" couleur="Bleu" />
      <Voiture marque="Toyota" modele="Corolla" couleur="Blanc" />

      <hr />

      {/* Exercices ListeCourses */}
      <h2>Exercice ListeCourses</h2>
      <h3>Fruits</h3>
      <ListeCourses elements={fruits} />

      <h3>Légumes</h3>
      <ListeCourses elements={legumes} />
    </div>
  );
}

export default App;