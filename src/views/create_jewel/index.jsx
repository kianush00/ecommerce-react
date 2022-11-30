/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from '@/components/product';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from '@/selectors/selector';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import 'survey-core/defaultV2.min.css';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  "elements": [
    {
      "type": "radiogroup",
      "name": "jewel_type",
      "title": "¿Que tipo de joya deseas ordenar?",
      "isRequired": true,
      "showNoneItem": false,
      "colCount": 3,
      "choices": [
        "Collar",
        "Pulsera",
        "Anillo"
      ]
    },
    {
      "type": "radiogroup",
      "name": "jewel_material",
      "title": "¿De que material deseas la joya?",
      "isRequired": true,
      "showNoneItem": false,
      "colCount": 3,
      "choices": [
        "Oro",
        "Plata",
        "Bronce"
      ]
    }
  ]
};

function CreateJewel() {
  const survey = new Model(surveyJson);
  return (
    <React.Fragment>
      
      <Toolbar />
      <Survey model={survey} />
    </React.Fragment>
      
        
  );

}

export default CreateJewel;
