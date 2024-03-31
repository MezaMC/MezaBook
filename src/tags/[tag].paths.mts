// packages/[pkg].paths.js

//    {params: { tag: 'xxx' }}
import tags from './tags'

export default {
    paths() {
        // return tags_data
        return Object.keys(tags).map(tag => {return {params: {tag: tag}}})
    }
}