 const tasks = [
   {
     'name' : 'write for Envato Tust+',
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
  const soloNombres = tasks.map((tasks)=> tasks.name);
  console.log(soloNombres);

  // enunciado b
  const soloDuracion = tasks.map((i) => i.duration);
  const total = soloDuracion.reduce((a, b) => a + b);
  console.log(total);


  // // enunciado c
  const valor = tasks.map((i)=> i.duration);
  const menorTareaDuracion = Math.min(...valor);
  console.log(menorTareaDuracion);

  // // enunciado d
  const item = tasks.map((i)=> i.duration);
  const mayorTareaDuracion = Math.max(...valor);
  console.log(mayorTareaDuracion);

  // enunciado e
   const menorDuracion = tasks.filter(tasks => tasks.duration < 140);
  console.log(menorDuracion);

  // enunciado f

  const mayorDuracion = tasks.filter(task => {
    if (task.duration > 240) {
      return true;
    } else {
      return false;
    }
  });

