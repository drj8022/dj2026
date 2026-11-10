// Bool
export const isBrowser = typeof window !== "undefined"

// Bool
export const isObjEmpty = obj => Object.keys(obj).length === 0

// "Hello World!" => "HelloWorld"
export const camelize = str => str?.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

// "Hello World!" => "hello-world"
export const kebabize = str => str?.toLowerCase().replace(/[\s_]+/g, '-')

// "h3632($45tgkjh55kjh5p5" => "+1 (363) 245-5555"
export const formatPhone = phone => {
  const clean = ('' + phone).replace(/\D/g, '')
  const match = clean.match(/^(\d{3})(\d{3})(\d{4})$/)
  return match ? `+1 ${match[1]} ${match[2]} ${match[3]}` : phone
}

// ['about'] => '/about'
export const getPathFromArray = arr => {
  return arr ? `/${arr.join('/')}` : '/'
}
