'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateClones = [];
  let initialStateCopy = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(initialStateCopy, action.extraData);
        stateClones.push({ ...initialStateCopy });
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete initialStateCopy[key];
        }
        stateClones.push({ ...initialStateCopy });
        break;
      case 'clear':
        initialStateCopy = {};
        stateClones.push({ ...initialStateCopy });
        break;
    }
  }

  return stateClones;
}

module.exports = transformStateWithClones;
