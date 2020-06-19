import { connect } from '@magento/venia-drivers';
import { closeDrawer } from '../../../../../../../actions/app';
import { signOut } from '../../../../../../../actions/user';

import Profile from './profile';

const mapStateToProps = state => {
    const { user } = state;

    return {
        user
    };
};

const mapDispatchToProps = {
    closeDrawer,
    signOut
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
