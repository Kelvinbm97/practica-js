## 9. Investigar y detallar que son las Promesas en Javascript y de 3 ejemplos

    # Las promesas son un objeto que representan un valor eventualmente se va ah resolver y nosotros eventualmente vamos ah poder acceder a el ya sea que se puede resolver inmediatamente o eventualmente y tabn se pueden ir encadenando

     ## Ejemplo


     # const k = Promise.resolve(1)
     console.log(k);
     k.then(x => console.log(x));

////////////////////////////////

     # const k = Promise.resolve(1)
      console.log(k);
      k.then(x => x + 8)
        .then(x => Promise.resolve(x+8))
        .then(x => console.log(x))

////////////////////////////////

      # const delayed = x => new Promise((resolve,reject) => setTimeout(() => resolve(x), 600))
      delayed(8).then(x => console.log(x))
