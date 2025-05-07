import Tag from "./Tag.vue";

interface Tag {
    icon?: string,
    color?: string,
    bg?: string,
    desc?: string,
    display?: string
}

const tags_data: { [name: string]: Tag } = {}

export default tags_data