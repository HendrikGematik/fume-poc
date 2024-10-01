/**
 * © Copyright Outburn Ltd. 2022-2024 All Rights Reserved
 *   Project name: FUME-COMMUNITY
 */

import expressions from './jsonataExpression';

const selectKeys = async (obj: object, skeys: string[]): Promise<object> => {
  const res = await expressions.selectKeys.evaluate({}, { in: obj, skeys });
  return res;
};

const omitKeys = async (obj: object, okeys: string[]): Promise<object> => {
  const res = await expressions.omitKeys.evaluate({}, { in: obj, okeys });
  return res;
};

const isEmpty = async (value: any): Promise<boolean> => {
  if (value === undefined || value === null) return true;
  const res = await expressions.isEmpty.evaluate({}, { value });
  return res;
};

// add function to read Medication details from database by pzn and feed into object
const feedMedicationPZN = async (obj: object, pzn: string): Promise<object> => {
  // lookup details from pzn
  // medication = await expressions.feedMedicationPZN.evaluate({},'form.text', 'Tablette');
  // medication = await expressions.feedMedicationPZN.evaluate({},'ingredient.strength.amountText', '500mg');
  // medication = await expressions.feedMedicationPZN.evaluate({},'code.text', 'ASS-500 Produktbezeichnung - Verzeichnis manifique');
  const res = await expressions.feedMedicationPZN.evaluate(obj);
  return res;
};

export { feedMedicationPZN, isEmpty, omitKeys, selectKeys };
