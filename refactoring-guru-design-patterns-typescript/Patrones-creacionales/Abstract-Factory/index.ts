/**
 * La interfaz de Abstract Factory declara un conjunto de métodos que devuelven diferentes
 * productos abstractos.
 * Estos productos se denominan familia y están relacionados por un tema o concepto de alto
 * nivel.
 * Los productos de una familia generalmente pueden colaborar entre ellos.
 * Una familia de productos puede tener varias variantes, pero los productos de una variante
 * son incompatibles con los productos de otra.
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}

/**
 * Concrete Factory produce una familia de productos que pertenecen a una sola variante.
 * La fábrica garantiza que los productos resultantes son compatibles.
 * Tenga en cuenta que las firmas de los métodos de Concrete Factory devuelven un producto
 * abstracto, mientras que dentro del método se crea una instancia de un producto concreto.
 */
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

/**
 * Cada Concrete Factory tiene una variante de producto correspondiente.
 */
class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

/**
 * Cada producto distinto de una familia de productos debe tener una interfaz base.
 * Todas las variantes del producto deben implementar esta interfaz.
 */
interface AbstractProductA {
  usefulFunctionA(): string;
}

/**
 * Estos Productos de Concreto son creados por las Fábricas de Concreto correspondientes.
 */
class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}

/**
 * Aquí está la interfaz base de otro producto.
 * Todos los productos pueden interactuar entre sí, pero la interacción adecuada
 * solo es posible entre productos de la misma variante concreta.
 */
interface AbstractProductB {
  /**
   * El producto B es capaz de hacer lo suyo...
   */
  usefulFunctionB(): string;

  /**
   * ...pero también puede colaborar con los ProductA.
   *
   * The Abstract Factory se asegura de que todos los productos que crea sean de la misma
   * variante y, por lo tanto, compatibles.
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

/**
 * Estos Productos de Concreto son creados por las Fábricas de Concreto correspondientes.
 */
class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }

  /**
   * La variante Producto B1 solo puede funcionar correctamente con la variante Producto A1.
   * Sin embargo, acepta cualquier instancia de AbstractProductA como argumento.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2.";
  }

  /**
   * La variante Producto B2 solo puede funcionar correctamente con la variante Producto A2.
   * Sin embargo, acepta cualquier instancia de AbstractProductA como argumento.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

/**
 * El código del cliente trabaja con fábricas y productos solo a través de tipos abstractos:
 * AbstractFactory y AbstractProduct.
 * Esto le permite pasar cualquier subclase de fábrica o producto al código del cliente
 * sin romperlo.
 */
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * El código del cliente puede funcionar con cualquier clase de fábrica concreta.
 */
console.log("Client: Testing client code with the first factory type...");
clientCode(new ConcreteFactory1());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new ConcreteFactory2());
