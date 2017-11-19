import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class ProfileEditor extends Component {
  render(props) {
    const { match: { params: { user } } } = this.props;
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name='name' component='input' type='text' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'profile-editor',
  onSubmit: data => console.log(data),
})(ProfileEditor);
