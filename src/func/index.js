import {NotificationManager} from 'react-notifications';

import _ from 'lodash'

export const Notify = ({type, msg, title, callback}) => NotificationManager[type](msg, title, 5000, callback)

export const readErrors = (e) => {
  const messages = []
  _.forOwn(e.response.data.errors, (msgs, field) => {
    msgs.map((msg) => {
      messages.push(msg)
    })
  });
  return messages
}

export const addErrors = (errors, payload) => {
  // remove existing
  _.forOwn(payload, (message, field) => {
    errors.remove(field);
  });
  // add
  _.forOwn(payload, (message, field) => {
    errors.add(field, message);
  });
  return errors
}

export const removeErrors = (errors) => {
  _.forOwn(errors, (message, field) => {
    errors.remove(field);
  });
  return errors
}

export const empty = (checks, condition = 'or') => {
  if (!checks) {
    return true
  }
  let bool = false;
  let count = 0;
  const checksSize = checks.length
  for (let i = 0; i < checksSize; i++) {
    if (!checks[i]) {
      if (condition === 'or') {
        bool = true;
        break
      } else {
        count++
      }
    } else if (checks[i].constructor === Array) {
      if(!checks[i] || checks[i].length === 0){
        if (condition === 'or') {
          bool = true;
          break
        } else {
          count++
        }
      }
    } else if (checks[i].constructor === String) {
      if(!checks[i] || checks[i] === ''){
        if (condition === 'or') {
          bool = true;
          break
        } else {
          count++
        }
      }
    } else if (checks[i].constructor === Object){
      if (Object.entries(checks[i]).length === 0) {
        if (condition === 'or') {
          bool = true
          break
        } else {
          count++
        }
      }
    }
  }
  if (condition === 'or') {
    return bool
  } else {
    return checksSize === count
  }
};
