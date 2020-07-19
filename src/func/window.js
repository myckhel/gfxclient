import {store} from '../redux/store'
import {Notify} from './'
import _ from 'lodash'
// import colors from '../constants/custom-theme.json'

window.store = store
window.Notify = Notify
// window.colors = colors

String.prototype.trunc = String.prototype.trunc ||
function(n){
    return (this.length > n) ? this.substr(0, n-1) + '...' : this;
};

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

window.merge = _.merge

window.empty = (checks, condition = 'or') => {
  if (!checks) {
    return true
  }
  let bool = false
  let count = 0
  const checksSize = checks.length
  for (let i = 0; i < checksSize; i++) {
    if (!checks[i]) {
      if (condition === 'or') {
        bool = true
        break
      } else {
        count++
      }
    } else if (checks[i].constructor === Array) {
      if(!checks[i] || checks[i].length === 0){
        if (condition === 'or') {
          bool = true
          break
        } else {
          count++
        }
      }
    } else if (checks[i].constructor === String) {
      if(!checks[i] || checks[i] === ''){
        if (condition === 'or') {
          bool = true
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
}

window.safeProp = (obj, path, callback) => {
  if (!obj) return false

  let schema = obj;  // a moving reference to internal objects within obj
  let pList = path.split('.');
  let len = pList.length;
  if (len === 1 && pList[0] === "") return obj

  for(let i = 0; i < len-1; i++) {
    let elem = pList[i];
    if( !schema.hasOwnProperty(elem) ){
      // console.log(schema, elem);
      schema=null
      break;
    } else {
      schema = schema[elem];
    }
  }

  if (schema && schema.hasOwnProperty(pList[len-1]) ) {
    if (callback) {
      return callback(schema[pList[len-1]])
    }
    return schema[pList[len-1]]
  } else {
    return null
  }
}

export default {
  i: 'i',
}
