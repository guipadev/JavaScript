"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(contandorInfinito),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(impares);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculadora =
/*#__PURE__*/
function () {
  function Calculadora() {
    _classCallCheck(this, Calculadora);

    this.numero1;
    this.numero2;
  }

  _createClass(Calculadora, [{
    key: "resta",
    value: function resta(numero1, numero2) {
      this.numero1;
      this.numero2;
      return numero1 - numero2;
    }
  }, {
    key: "suma",
    value: function suma(numero1, numero2) {
      this.numero1;
      this.numero2;
      return numero1 + numero2;
    }
  }]);

  return Calculadora;
}();

var operacion = new Calculadora();
console.log("El resutaldo resta ".concat(operacion.resta(30, 10)));
console.log("El resutaldo suma ".concat(operacion.suma(30, 10))); //FUNCION GENERADORA O ITERADORA

function contandorInfinito() {
  var i;
  return regeneratorRuntime.wrap(function contandorInfinito$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!true) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return i;

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var conteo = contadorInfinito();
console.log(conteo.next()); //{value: 0, done: false}

console.log(conteo.next()); //{value: 1, done: false}

console.log(conteo.next()); //{value: 2, done: false}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = conteo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var numero = _step.value;
    if (numero > 10) break;
    console.log(numero);
  } //Imprime los valores de 0 a 10
  //OTRO EJEMPLO DE FUNCION ITERADORA

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function impares() {
  var numero;
  return regeneratorRuntime.wrap(function impares$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          numero = 0;

        case 1:
          if (!true) {
            _context2.next = 7;
            break;
          }

          _context2.next = 4;
          return 2 * numero + 1;

        case 4:
          numero++;
          _context2.next = 1;
          break;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function tarea(n, iterador) {
  var contador = null;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = iterador[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      con = _step2.value;
      console.log(con);
      contador--;
      if (contador <= 0) break;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

var todos_los_impares = impares(); //1

tarea(5, todos_los_impares); //undefined