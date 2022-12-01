const precio_oro = 15000;
const precio_plata = 8000;

const resolucion = "175x175";

const joyas = [
  {
    name: "Collar",
    price: 10000,
    image: "https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw48dae575/productimages/singlepackshot/352187C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "https://thumbs.dreamstime.com/b/yellow-gold-necklace-18839931.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "https://m.media-amazon.com/images/I/61cd-uFKfbL._AC_SY395_.jpg",
      },
    ],
    colgantes: [
      //Colgante para collar
      {
        name: "San Benito",
        price: 3000,
        image: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/09/12105240/cle134a-1.jpg",
      },
      {
        name: "Hoja de monstera",
        price: 5000,
        image: "https://img.freepik.com/fotos-premium/hoja-monstera-dorada-sobre-maqueta-fondo-blanco_53876-107653.jpg?w=2000",
      },
    ],
  },

  {
    name: "Aro",
    price: 7500,
    image: "https://www.ldoceonline.com/media/english/illustration/earrings.jpg?version=1.2.58",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "https://image.ejohri.com/catalog/product/462/BL1022-1.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "https://i.pinimg.com/474x/30/5d/04/305d04b1b02b812ea12d128e7cccc0ee--silver-stud-earrings-flower-earrings.jpg",
      },
    ],
    colgantes: [
      //Colgantes para aro
      {
        name: "Corazón",
        price: 4000,
        image: "https://qazar.cl/wp-content/uploads/2019/05/IMG_2621.jpg",
      },
      {
        name: "Perlas",
        price: 3500,
        image: "https://falabella.scene7.com/is/image/Falabella/gsc_112630489_341013_7?wid=800&hei=800&qlt=70",
      },
    ],
  },
  {
    name: "Pulsera",
    price: 2000,
    image: "https://rukminim1.flixcart.com/image/832/832/jrgo4280/precious-bangle-bracelet/x/s/m/free-size-bnjbcbcd2c-malabar-gold-and-diamonds-original-imafd8zgr8v8xutg.jpeg?q=70",
    materials: [
      {
        name: "Oro",
        price: precio_oro,
        image:
          "https://m.media-amazon.com/images/I/71gh3bpIJDL._UL1500_.jpg",
      },
      {
        name: "Plata",
        price: precio_plata,
        image:
          "https://stylesatlife.com/wp-content/uploads/2016/10/Silver-Bracelets.jpg.webp",
      },
    ],

    colgantes: [
      //Colgante para pulsera
      {
        name: "Corazón",
        price: 5000,
        image: "https://qazar.cl/wp-content/uploads/2019/05/IMG_2621.jpg",
      },
      {
        name: "Estrella",
        price: 3500,
        image: "https://joyasnehgne.cl/wp-content/uploads/2021/01/CO010-scaled.jpeg",
      },
    ],
  },
];

const surveyJson = {
  elements: [],
  completeText: "Completar",
  completedHtml: "<p><h1>¡Tu pedido ha sido enviado satisfactoriamente!</h1></p>"
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
joyas.forEach((joya,index) => {
  surveyJson.elements[0].choices.push({
    value: joya.name,
    text: `${joya.name} - $${joya.price} ![](${joya.image} =${resolucion})`
  });

  //Material
  surveyJson.elements.push({
    type: "radiogroup",
    name: `${joya.name}_material`,
    title: "¿De qué material deseas?",
    isRequired: true,
    visibleIf: `{jewel_type}='${joya.name}'`,
    showNoneItem: false,
    colCount: joya.materials.length,
    choices: []
  })

  joya.materials.forEach((material) => {
    surveyJson.elements[surveyJson.elements.length-1].choices.push({
      value: `${joya.name}_${material.name}`,
      text: `${material.name} - $${material.price} ![](${material.image} =${resolucion})`,
    })
  })

  //Colgante
  surveyJson.elements.push({
    type: "radiogroup",
    name: `${joya.name}_colgante`,
    title: "¿Cuál colgante te gusta más?",
    isRequired: true,
    visibleIf: `{jewel_type}='${joya.name}'`,
    showNoneItem: false,
    colCount: joya.colgantes.length,
    choices: []
  })

  joya.colgantes.forEach((colgante)=>{
    surveyJson.elements[surveyJson.elements.length-1].choices.push({
      value: `${joya.name}_${colgante.name}`,
      text: `${colgante.name} - $${colgante.price} ![](${colgante.image} =${resolucion})`,
    })
  })

});

export { surveyJson, joyas };
