import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const ProductDetail = () => {

    console.log(history.location.pathname)
    // let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }


    return (
        <>
        <h1>Product Detail page</h1>
        <button type="button" onClick={handleClick}>
      Go home
    </button>
        </>
        
    )
}

export default ProductDetail;