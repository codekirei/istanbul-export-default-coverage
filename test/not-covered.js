import assert from 'assert'
import notCovered from '../src/not-covered'

exports['not-covered'] = {
  'is foo': () => assert.equal(notCovered, 'foo'),
}
