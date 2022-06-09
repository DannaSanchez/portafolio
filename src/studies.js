//carpet src
let studies=[
    {
        id:1,
        institucion:"Colegio Soles del Saber E.U.",
        titulo:"Bachillerato",
        fecha:"2014-2020",
        descripcion:"de grado 6 a 11, bachillerato acádemico",
        foto:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48174/school-emoji-clipart-md.png"
    },
    {
        id:2,
        institucion:"Kuepa",
        titulo:"Técnico laboral en digitación y procesamiento de datos",
        fecha:"2022-En curso",
        descripcion:"Programa con certificación de competencias en Programación de Aplicaciones Informáticas y Desarrollo Web Front End. Etapa lectiva se termina en la semana del 13 de junio. Etapa productiva comienza el 21 de junio (duración de 200 horas).  ",
        foto:"data:image/png;base64,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"
    },
    {
        id:3,
        institucion:"Universidad Tecnológica de Pereira.",
        titulo:"Fundamentos de Programación y Tecnologías Digitales y/o Industrias Creativas Digitales.",
        fecha:"2022-En curso",
        descripcion:" Aprender lenguajes de programación como python y java oriendada a objetos",
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrgDs3bIS9jZkfl0c-PQIuj9CiJrqof8Jvkn0qs5sFQc1BV2VxkHaBWJkLgDd_5327_I&usqp=CAU"
    },
    {
        id:4,
        institucion:"SENA",
        titulo:"Tecnólogo en producción de multimedia",
        fecha:"2021-2023 En curso",
        descripcion:" Etapa lectiva se termina en 15 de septiembre de este año. Etapa productiva comienza el 16 de septiembre y termina el 14 de marzo del 2023.",
        foto:"https://yt3.ggpht.com/CNjBjHWWQTbtFgiBqqgPEvAGXgMG4lK7csF7X3_kxKnGpkSS34R7C57axz2EddmQ82YeOyuW=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id:5,
        institucion:"SENA",
        titulo:"Curso de bocetación para diseño gráfico",
        fecha:"2021",
        descripcion:"Capacidad de proyectar y visualizar gráficamente las ideas de posibles productos, realizar correcciones y  según requerimientos de los proyectos.",
        foto:"https://yt3.ggpht.com/CNjBjHWWQTbtFgiBqqgPEvAGXgMG4lK7csF7X3_kxKnGpkSS34R7C57axz2EddmQ82YeOyuW=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id:6,
        institucion:"SENA",
        titulo:"Curso de diseño de elementos vectoriales en illustrator",
        fecha:"2021",
        descripcion:"Manejar la caja de herramientas, menú, paneles para la construcción y transformación de vectores, teniendo en cuenta los requerimientos del diseño.",
        foto:"https://yt3.ggpht.com/CNjBjHWWQTbtFgiBqqgPEvAGXgMG4lK7csF7X3_kxKnGpkSS34R7C57axz2EddmQ82YeOyuW=s900-c-k-c0x00ffffff-no-rj"
    },

]

export function getAllStudies(){
    return studies;
}
export function getStudy(id){
    return studies.find(stdy=> stdy.id===id)
}
