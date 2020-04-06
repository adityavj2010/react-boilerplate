import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, user,...rest } = props;

  
  const classes = useStyles();
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar_url}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.login}
      </Typography>
      <Typography variant="body2">{user.type}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state,ownProps)=>{
  console.warn()
  return {
    ...ownProps,
    user:state.user.user
  }
}

const mapDispatchToProps = ()=> {
  return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile);
