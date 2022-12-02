const precio_oro = 15000;
const precio_plata = 8000;

const resolucion_2_columnas = "175x175";
const resolucion_3_columnas = "250x250";

const joyas = [
  {
    name: "Collar",
    price: 10000,
    image: "src/images/create-jewel/collar/collar.jpg",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "src/images/create-jewel/collar/material/oro.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "src/images/create-jewel/collar/material/plata.jpg",
      },
    ],
    colgantes: [
      //Colgante para collar
      {
        name: "San Benito",
        price: 3000,
        image: "src/images/create-jewel/collar/colgante/san-benito.jpg",
      },
      {
        name: "Hoja de monstera",
        price: 5000,
        image: "src/images/create-jewel/collar/colgante/hoja-de-monstera.jpg",
      },
    ],
  },

  {
    name: "Aro",
    price: 7500,
    image: "src/images/create-jewel/aros/aros.jpg",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "src/images/create-jewel/aros/material/oro.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "src/images/create-jewel/aros/material/plata.jpg",
      },
    ],
    colgantes: [
      //Colgantes para aro
      {
        name: "Corazón",
        price: 4000,
        image: "src/images/create-jewel/aros/colgante/corazon.jpg",
      },
      {
        name: "Perlas",
        price: 3500,
        image: "src/images/create-jewel/aros/colgante/perlas.jpeg",
      },
    ],
  },
  {
    name: "Pulsera",
    price: 2000,
    image: "src/images/create-jewel/pulsera/pulsera.jpeg",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "src/images/create-jewel/pulsera/material/oro.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "src/images/create-jewel/pulsera/material/plata.jpg",
      },
    ],

    colgantes: [
      //Colgante para pulsera
      {
        name: "Corazón",
        price: 5000,
        image: "src/images/create-jewel/pulsera/colgante/corazon.jpg",
      },
      {
        name: "Estrella",
        price: 3500,
        image: "src/images/create-jewel/pulsera/colgante/estrella.jpeg",
      },
    ],
  },
];

const surveyJson = {
  elements: [],
  clearInvisibleValues: "onHidden",
  completeText: "Completar",
  completedHtml: "<p><h1>¡Tu pedido ha sido enviado satisfactoriamente!</h1></p>",
  width: 900
};
surveyJson.elements.push({
  type: "radiogroup",
  name: "jewel_type",
  title: "¿Qué tipo de joya deseas?",
  isRequired: true,
  onErrorCustomText: "hola",
  showNoneItem: false,
  colCount: joyas.length,
  choices: []
});
joyas.forEach((joya, index) => {
  surveyJson.elements[0].choices.push({
    value: {
      name_joya: joya.name,
      price_joya: joya.price
    },
    text: `${joya.name} - $${joya.price} ![](${joya.image} =${resolucion_2_columnas})`
  });

  //Material
  surveyJson.elements.push({
    type: "radiogroup",
    name: `${joya.name}_material`,
    title: "¿De qué material deseas?",
    isRequired: true,
    visibleIf: `{jewel_type.name_joya}='${joya.name}'`,
    showNoneItem: false,
    colCount: joya.materials.length,
    choices: []
  })

  joya.materials.forEach((material) => {
    surveyJson.elements[surveyJson.elements.length - 1].choices.push({
      value: {
        name_joya: joya.name,
        name_material: material.name,
        price_material: material.price
      },
      text: `${material.name} - $${material.price} ![](${material.image} =${resolucion_3_columnas})`,
    })
  })

  //Colgante
  surveyJson.elements.push({
    type: "radiogroup",
    name: `${joya.name}_colgante`,
    title: "¿Cuál colgante te gusta más?",
    isRequired: true,
    visibleIf: `{jewel_type.name_joya}='${joya.name}'`,
    showNoneItem: false,
    colCount: joya.colgantes.length,
    choices: []
  })

  joya.colgantes.forEach((colgante) => {
    surveyJson.elements[surveyJson.elements.length - 1].choices.push({
      value: {
        name_joya: joya.name,
        name_colgante: colgante.name,
        price_colgante: colgante.price
      },
      text: `${colgante.name} - $${colgante.price} ![](${colgante.image} =${resolucion_3_columnas})`,
    })
  })

});
surveyJson.elements.push({
  "type": "html",
  "name": "precioTotal",
  "html": "<div style='font-size:30px'>Precio total <span id='precioTotal' style='font-size:30px'>$ 0.00</span> </div>"
})

export { surveyJson, joyas };
