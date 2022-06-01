import { type, format, constraints } from '@maif/react-forms';

const genres = [{ value: "male", label: "masculin" }, { value: "female", label: "feminin" }, { value: "non-binary", label: "non-binaire" }]
const weaponsApi = "http://localhost:3042/"

/*

constraints.when('isHuman', is =>!is, [])

constraints.test("weight", 'pas plus de 100 kg', value => value.reduce((a, c) => a + c.weight, 0) <= 100)

transformer: (value) => ({ label: `${value.label} - ${value.weight} kg`, value }),

*/


export const schema = {
  
}