import { Fragment } from "react";
import withToolTip from "./withToolTip";

const Movie = ({ showToolTip }) => {

    return (
        <Fragment >
            <p>Hover Here for change</p>
            {showToolTip && <div>tool tip</div>}
        </Fragment>

    );
}

export default withToolTip(Movie);