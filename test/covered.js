import assert from 'assert'
import covered from '../src/covered'

exports.covered = {
  'is bar': () => assert.equal(covered, 'bar'),
}
