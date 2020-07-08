const requireComponents = require.context('./',false,/.js/)

let APIs = {}

requireComponents.keys().forEach(key => {
    if(key === 'index.js'){
        return
    }
    Object.assign(APIs,requireComponents(key).default) 
})
console.log('apis',APIs)

export default APIs