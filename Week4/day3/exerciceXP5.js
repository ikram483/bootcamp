class Dog {
    constructor(name) {
      this.name = name;
    }
  }
//   //1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   }
  
  //2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);   // Appelle le constructeur de la classe Dog    
      this.size = size;  // Ajoute la propriété spécifique à Labrador
    }
  }
  //3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);       //  'name' n'est pas défini ici
//       this.size = size;
//     }
//   }
  
    //4
    // class Labrador extends Dog {
    //     constructor(name, size) {
    //       this.name = name;  //  super() doit être appelé avant this
    //       this.size = size;
    //     }
    //   }
      