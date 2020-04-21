import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Gnomes from "./pages/Gnomes";
import GnomeDetail from "./pages/GnomeDetail";
import { fetchGnomesUtil } from "./redux/utils/Gnomes";
import { GlobalStyle } from "./styles";

const Main = (props) => {
    useEffect(() => {
        props.fetchGnomes();
    }, []);
    return (
        <Fragment>
            <GlobalStyle />
            <Switch>
                <Route path="/gnome/:id" component={GnomeDetail} />
                <Route path="/" component={Gnomes} />
            </Switch>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    gnomes: state.gnomes,
});
const mapDispatchToProps = (dispatch) => ({
    fetchGnomes: () => dispatch(fetchGnomesUtil()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
