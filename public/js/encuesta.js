const encuesta = document.querySelector("#formregister");

encuesta.addEventListener("submit", async (e) => {
  e.preventDefault();

  const edad = document.querySelector("#edadregistro").value;
  const genero = document.querySelector("#generoregistro").value;
  const localidad = document.querySelector("#localidadregistro").value;
  const nivel_estudio = document.querySelector("#nivelestudioregistro").value;
  const genero_musical = document.querySelector("#generomusicalregistro").value;
  const cancion_reciente = document.querySelector(
    "#cancionrecenteregistro"
  ).value;
  const cancion_favorita = document.querySelector(
    "#cancionfavoritaregistro"
  ).value;
  const artista_musical = document.querySelector(
    "#artistamusicalregistro"
  ).value;
  const plataforma_musical = document.querySelector(
    "#plataformamusicalregistro"
  ).value;
  const tiempo_escucha_diario = document.querySelector(
    "#tiempoescucharegistro"
  ).value;
  const horario_favorito_escucha = document.querySelector(
    "#horariofavoritoregistro"
  ).value;

  const response = await fetch("http://localhost:4000/api/encuesta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      edad,
      genero,
      localidad,
      nivel_estudio,
      genero_musical,
      cancion_reciente,
      cancion_favorita,
      artista_musical,
      plataforma_musical,
      tiempo_escucha_diario,
      horario_favorito_escucha,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (response.status !== 201 && response.status !== 200) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    return;
  }

  swal.fire({
    icon: "success",
    title: "Completado correctamente",
    text: "Completado correctamente",
  });

  encuesta.reset();
});
