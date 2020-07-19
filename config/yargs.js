const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea por hacer",
};

const completado = {
  alias: "c",
  demand: true,
  default: true,
  desc: "Marca como completado la tarea",
};

const argv = require("yargs")
  .command("crear", "Crea un elemento por hacer", {
    descripcion,
  })
  .command("borrar", "Crea un elemento por hacer", {
    descripcion,
  })
  .command("actualizar", "actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("listar", "Lista los elementos guardados", {
    completado: {
      alias: "c",
      demand: false,
      default: undefined,
      desc: "Marca como completado la tarea",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
