/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Toolbar } from '@mui/material';
import 'survey-core/defaultV2.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import {surveyJson, joyas} from "./json"

StylesManager.applyTheme("defaultV2");

//joyas["collar"].price
 
 


function CreateJewel() {
  const survey = new Model(surveyJson);
  survey.onErrorCustomText.add(function (sender, options) {
    options.text = "Respuesta requerida.";
  });

  let converter =new showdown.Converter();
  survey.onTextMarkdown.add(function (survey, options) {
    // convert the markdown text to html
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  });

  survey.onComplete.add(function (sender) {
    document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  });
  function Pedido ()  {
    this.jewel_type = {
      name: "",
      price: 0
    }
    this.material = {
      name: "",
      price: 0
    }
    this.colgante = {
        name: "",
        price: 0
    }
    this.getPrecioTotal = ()=>
      this.jewel_type.price + this.material.price + this.colgante.price;
    

  }
  let pedido = new Pedido(); //OBJETO PEDIDO A MANIPULAR PARA ENVIAR AL CARRO DE COMPRAS
  console.log(pedido)
  survey.onValueChanging.add((sender ,options)=>{
    //AQUI DEBE ESTAR EL SCRIPT QUE VA IR ACTUALIZANDO EL PRECIO
    
    if(options.name == "jewel_type"){
      pedido = new Pedido(); //SI cambia de joya, crea un objeto nuevo
      pedido.jewel_type.name = options.value.name_joya;
      pedido.jewel_type.price = options.value.price_joya;
      
    }else if(options.name.includes("material")){
      pedido.material.name = options.value.name_material;
      pedido.material.price = options.value.price_material;
    }else if(options.name.includes("colgante")){
      pedido.colgante.name = options.value.name_colgante;
      pedido.colgante.price = options.value.price_colgante;
    }
    document.getElementById("precioTotal").innerHTML = `$${pedido.getPrecioTotal()}`
  })
  return (
    <React.Fragment>
      
      <Toolbar />
      <Survey model={survey} />
      
    </React.Fragment>
      
        
  );

}

export default CreateJewel;
