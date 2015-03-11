var assert = chai.assert;

suite('csv', function() {

  setup(function(){
    if (typeof __html__ !== 'undefined') {
      document.body.innerHTML = __html__['tests/index.html'];
      original = document.getElementById('original');
      finaltable = document.getElementById('finaltable');
    }
  });

  test('Dos filas con tres columnas', function() {
    original.value = 'a, 1, 2 \n b, 3, 4';
    calculate();
    assert.deepEqual(finaltable.innerHTML, '<table class="center" id="result"><tbody><tr><td>a</td><td> 1</td><td> 2</td></tr><tr><td>b</td><td> 3</td><td> 4</td></tr></tbody></table>');
  });
  
  test('Dos filas con distinto número de columnas', function() {
    original.value = 'a, 1, 2 \n b, 3, 4, 5';
    calculate();
    assert.match(finaltable.innerHTML, 'class="error"');
  });
});