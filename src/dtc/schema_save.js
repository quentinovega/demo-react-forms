import { type, format, constraints } from '@maif/react-forms';

const genres = [{ value: "male", label: "masculin" }, { value: "female", label: "feminin" }, { value: "non-binary", label: "non-binaire" }]
export const schema = {
  name: {
    type: type.string,
    label: "Nom du personnage",
    constraints: [
      constraints.required("Le nom est requis")
    ]

  },
  birthday: {
    type: type.date,
    label: "Date de naissance",
    constraints: [
      constraints.required("valeur requise"),
      constraints.max(new Date(), "pas de naissance dans le future")
    ]
  },
  poids: {
    type: type.number,
    label: "Poids",
    constraints: [
      constraints.required("valeure requise"),
      constraints.positive("impossible !!")
    ]
  },
  biographie: {
    type: type.string,
    format: format.text,
    label: 'Biographie',
  },
  isHuman: {
    type: type.bool,
    label: 'Humain ?',
    constraints: [
      constraints.required("valeur requise")
    ]
  },
  genre: {
    type: type.string,
    format: format.select,
    options: genres,
    constraints: [
      constraints.required("valeur requise")
    ]
  },
  species: {
    type: type.string,
    visible: { ref: 'isHuman', test: is => !is },
    label: 'Espèce',
    constraints: [
      constraints.when('isHuman', is => !is, [
        constraints.oneOf(["elf", "orc", "semi-dragon"], "l'espece doit etre particuliere (elf, orc ou semi-dragon)"),
        constraints.required("l'espece est requise si non-humain"),
      ])
    ]
  },
  alignment: {
    type: type.object,
    format: format.form,
    schema: {
      lawVsChaos: {
        type: type.string,
        format: format.buttonsSelect,
        options: ["law", "neutral", "chaos"]
      },
      goodVsEvil: {
        type: type.string,
        format: format.buttonsSelect,
        options: ["good", "neutral", "evil"]
      }
    },
    constraints: [
      constraints.required("valeure requise")
    ]
  },
  weapons: {
    type: type.string,
    format: format.select,
    isMulti: true,
    optionsFrom: "http://localhost:3042/",
    defaultValue: [{ label: "toothpick - 0 kg", weight: 0, rarity: 'common' }],
    transformer: (value) => ({ label: `${value.label} - ${value.weight} kg`, value }),
    constraints: [
      constraints.min(1, 'Pas de combat à mains nues, c\'est dangereux !'),
      constraints.test("weight", 'pas plus de 100 kg', value => value.reduce((a, c) => a + c.weight, 0) <= 100) 
    ]
  },
  // avatar: {
  //   type: type.file,
  //   format: format.hidden,
  //   constraints: [
  //     constraints.required('your avatar is not set'),
  //     constraints.maxSize(2000000, 'no more than 2 Mo please'),
  //     constraints.supportedFormat(['jpeg', 'jpg', 'png'], 'just jpeg or png file please')
  //   ]
  // }
}