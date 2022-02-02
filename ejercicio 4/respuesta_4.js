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
  const soloDuracion = tasks.map((tasks)=> tasks.duration);
  console.log(soloDuracion);

  // // enunciado c
   const tareaMenorDuracion = tasks.filter((tasks)=> tasks.duration <= 60);
  console.log(tareaMenorDuracion);

  // enunciado e
   const menorDuracion = tasks.filter(tasks => tasks.duration < 140);
  console.log(menorDuracion);

  // enunciado f

  const mayorDuracion = tasks.filter(task => {
    if (task.duration >= 240) {
      return true;
    } else {
      return false;
    }
  });
  console.log(mayorDuracion);