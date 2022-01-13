class Pila{
    //definir constructor, que será el representante de este objeto
    constructor(){
        this.pila = [];
    }
    //Metodos del objeto Pila
    //Agregar un elemento
    add(element){ 
        this.pila.push(element);
        return this.pila;
    }
    //Eliminar un elemento
    delete(){
       return this.pila.pop();
    }
    //Leer un elemento (el ultimo elemento agregado)
    getElement(){
        return this.pila[this.pila.length - 1];
    }
    //Saber el tamaño de la pila (cantidad de elementos)
    GetSize(){
       return this.pila.length;
    }
    //Leer todos los elementos
    getElements(){
        console.log(this.pila);
    }
}

