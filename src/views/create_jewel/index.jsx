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
  return (
    <React.Fragment>
      
      <Toolbar />
      <Survey model={survey} />
    </React.Fragment>
      
        
  );

}

export default CreateJewel;
