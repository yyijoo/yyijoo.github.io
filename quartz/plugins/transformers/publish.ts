import { QuartzTransformerPlugin } from "../types"


export const PublishFilter: QuartzTransformerPlugin = () => {
    return {
        name: "PublishFilter",
        markdownPlugins() {
            return []
        },
        htmlPlugins() {
            return []
        },
        externalResources() {
            return {}
        },
        filter(file: any) {
            // frontmatter에 publish: true가 있는 것만 통과
            const publish = file.data.frontmatter?.publish
            console.log(`[PublishFilter] ${file.data.filePath}: publish=${publish}`)

            return publish === true
        },
    }
}