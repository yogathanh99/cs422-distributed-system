import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField, withStyles, Button } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import ButterToast, { Cinnamon } from 'butter-toast';

import * as actions from '../store/actions';
import useForm from '../utils/useForm';

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  postBtn: {
    width: '50%',
  },
});

const PostMessageForm = ({
  classes,
  messages,
  createMessage,
  updateMessage,
  currentId,
  setCurrentId,
}) => {
  useEffect(() => {
    if (currentId !== 0) {
      setValues({
        ...messages.find((x) => x._id === currentId),
      });
      setErrors({});
    }
  }, [currentId, messages]);

  const initValue = {
    title: '',
    info: '',
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initValue, setCurrentId);

  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? '' : 'This field is required.';
    temp.info = values.info ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title='Box Messages'
            content='Submitted successfully'
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<AssignmentTurnedIn />}
          />
        ),
      });
      resetForm();
    };

    if (validate()) {
      if (currentId === 0) createMessage(values, onSuccess);
      else updateMessage(currentId, values, onSuccess);
    }
  };

  return (
    <form
      autoComplete='off'
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name='title'
        variant='outlined'
        label='Title'
        fullWidth
        value={values.title}
        onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })}
      />
      <TextField
        name='info'
        variant='outlined'
        label='Info'
        fullWidth
        multiline
        rows={4}
        value={values.info}
        onChange={handleInputChange}
        {...(errors.info && { error: true, helperText: errors.info })}
      />
      <Button
        variant='contained'
        color='primary'
        size='large'
        type='submit'
        className={classes.postBtn}
      >
        Submit
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  createMessage: actions.createMessage,
  updateMessage: actions.updateMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(PostMessageForm));
