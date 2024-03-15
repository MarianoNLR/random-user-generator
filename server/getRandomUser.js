import { names, lastnames, countries } from './userData.js'

export const newUser = async () => {
  const name = names[Math.floor(Math.random() * names.length)]
  const lastname = lastnames[Math.floor(Math.random() * lastnames.length)]
  const email = `${name.toLowerCase()}.${lastname.toLocaleLowerCase()}@gmail.com`
  const country = countries[Math.floor(Math.random() * countries.length)]
  return {
    name,
    lastname,
    email,
    country
  }
}
