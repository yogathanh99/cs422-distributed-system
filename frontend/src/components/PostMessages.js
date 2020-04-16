import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Paper,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import ButterToast, { Cinnamon } from 'butter-toast';
import { DeleteSweep } from '@material-ui/icons';

import PostMessageForm from './PostMessageForm';
import * as actions from '../store/actions';

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
});

const PostMessages = ({ classes, fetchMessages, deleteMessage, messages }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title='Post Box'
            content='Deleted successfully'
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm('Are you sure to delete this message?'))
      deleteMessage(id, onSuccess);
  };

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm {...{ currentId, setCurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {messages.map((message, index) => (
              <Fragment key={index}>
                <ListItem>
                  <ListItemText>
                    <Typography variant='h5'>{message.title}</Typography>
                    <div>{message.info}</div>
                    <div className={classes.actionDiv}>
                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        className={classes.smMargin}
                        onClick={() => setCurrentId(message._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        className={classes.smMargin}
                        onClick={() => onDelete(message._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </ListItemText>
                </ListItem>
                <Divider component='li' />
              </Fragment>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  messages: state.messages,
  message: state.message,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = {
  fetchMessages: actions.fetchMessages,
  deleteMessage: actions.deleteMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(PostMessages));
