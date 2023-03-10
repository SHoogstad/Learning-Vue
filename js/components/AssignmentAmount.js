export  default {
    template: `
        <span>({{ count }})</span>
    `,

    props: {
        count: {
            type: Number,
            default: 0,
        },
    },
}