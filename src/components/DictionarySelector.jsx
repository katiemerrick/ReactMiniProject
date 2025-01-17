import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function DictionarySelector() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="selector-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'selector-link-active', otherwise we set it to 'selector-link '
          className={currentPage === '/' ? 'selector-link active' : 'selector-link '}
        >
          Home
        </Link>
      </li>
      <li className="selector-item">
        <Link
          to="/GeneralBiology"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal selector-link 
          className={currentPage === '/GeneralBiology' ? 'selector-link active' : 'selector-link '}
        >
          General Biology
        </Link>
      </li>
      <li className="selector-item">
        <Link
          to="/GeneralChemistry"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal selector-link 
          className={currentPage === '/GeneralChemistry' ? 'selector-link active' : 'selector-link '}
        >
          General Chemistry
        </Link>
      </li>
      <li className="selector-item">
        <Link
          to="/GeneralGeology"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal selector-link 
          className={currentPage === '/GeneralGeology' ? 'selector-link active' : 'selector-link '}
        >
          General Geology
        </Link>
      </li>
      <li className="selector-item">
        <Link
          to="/MedicalTerms"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal selector-link 
          className={currentPage === '/MedicalTerms' ? 'selector-link active' : 'selector-link '}
        >
          Medical Terms
        </Link>
      </li>
    </ul>
  );
}

export default DictionarySelector;