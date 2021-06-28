//Destructuring Objects
// SAMETHING EXCEPT WITH OBJECTS INSTEAD OF ARRAYS

let user = {
  username: "TestUser",
  is_verifired: true,
};

let { username, is_verifired } = user;

console.log(username, is_verifired);

let metaData = {
  title: "Javasript-work",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2022-01-22t06:41:47",
      url: "/de/docs/Tools/ScratchPad",
      title: "Javascript-Werkzeug",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

//HOW TO GET TITLE AND TRANSLATION TITLE OUT?

let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metaData;
console.log(englishTitle, localeTitle);

let family = {
  familyName: "Gee",
  parents: [
    { mother: "Rebekah", age: 65 },
    { father: "Kim", age: 61 },
  ],
  country: ["United States", "germany", "Poland"],
};

//CHALLENGE
/**
 * WELCOME TO MY FAMILY TREE. ALLOW ME TO ACCES MY LAST NAME, MY MOTHER'S NAME, AND POLAND OUT OF THIS OBJECT
 * USING RESPECTIVE VVARIABLES USING DESTRUCTURING
 */

let {
  familyName: Gee,
  parents: [{ mother: Rebekah }],
  country: [, , Poland123],
} = family;
console.log(Poland123);
