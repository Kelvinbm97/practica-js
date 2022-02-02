# 3. Investigue que es la inmutabilidad en javascript y realice 2 ejemplos

## La inmutabilidad básicamente te permite representar estados de forma correcta y eliminar los "side effects",es mucho más fácil seguir la lógica de un software que no modifica sus variables que uno que permite que sus variables cambien a diestra y siniestra.

## Ejemplos:

      ## const jkm = {
        name : 'Jhornan'
      };

      console.log(Object.getOwnPropertyDescriptor(jkm, 'name'))
      Object.preventExtensions(jkm);
      console.log(Object.getOwnPropertyDescriptor(jkm, 'name'))



      ## const bar = {
        name : 'Kevin'
      };

      console.log(Object.getOwnPropertyDescriptor(bar, 'name'))
      Object.seal(bar);
      console.log(Object.getOwnPropertyDescriptor(bar, 'name'))
