import {connect} from 'react-redux';
import {setVisibilityFilter} from './actions';
import Link from './Link';

/**
 *  Stworzone przez Eryk Mariankowski dnia 29.05.18.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
