import assert from 'assert'
import covered from '../src/covered'

exports.covered = {
  'returns bar': () => assert.equal(covered, 'bar'),
}
