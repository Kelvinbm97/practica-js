const tasks1 = [
   {
     'name' : 'Write for Envato Tust+',
     'duration' : 120
   },
   {
     'name': 'Work out',
     'duration' : 60
   },
  {
     'name': 'Procrastine on Duolingo',
     'duration' : 240
   },
 ];

 // enunciado a

 const agregar = tasks1.push ({name : "Jhornan", duration : 200});
 console.log(tasks1);

// enunciado b

const total = tasks1.length;
console.log(total);

//enunciado c

var contador = [];
tasks1.forEach((i) =>{
  if(i.name.toUpperCase().indexOf("W")=== 0){
    contador.push(i)
  }
})
console.log(contador);



