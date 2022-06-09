let Proyects=[
    {
        id:1,
        nombre:"Animalandia",
        descripcion:"Sitio web para una veterinaria ",
        creado: "HTML, CSS, JavaScript y bootstrap",
        github:"https://github.com/DannaSanchez/animalandia-veterinaria.github.io",
        sweb:"https://dannasanchez.github.io/animalandia-veterinaria.github.io/",
    },
    {
        id:2,
        nombre:"ForjaEmpresas",
        descripcion:"Sitio web para una entidad de servicios de salud enfocada al covid-19",
        creado: "HTML, CSS, JavaScript",
        github:"https://github.com/DannaSanchez/Forjaempresas.github.io",
        sweb:"https://dannasanchez.github.io/Forjaempresas.github.io/",
    },
    {
        id:3,
        nombre:"Redvindicadas",
        descripcion:"Sitio web para colectivo feminista",
        creado: "HTML, CSS, JavaScript",
        github:"https://ricoththth.github.io/redvindicadas/",
        sweb:"https://github.com/ricoththth/redvindicadas/tree/danna",
    }
]

export function getAllProyects(){
    return Proyects;
}
export function getProyects(id){
    return Proyects.find(proy=> proy.id===id)
}
