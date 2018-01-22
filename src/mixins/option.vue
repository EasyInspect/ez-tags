
<template>

    <div class="ez-tag__option">{{display}}</div>

</template>

<script>

    export default {

        props: {

            value: {

                default: 'value'

            },
            label: {

                default: 'value'

            },
            disabled: {

                default: false

            },
            tag: {

                default: () => {}

            }

        },

        computed: {

            display() {

                if (this.tag.new) {

                    return `Add "${this.getLabel()}"`;

                } else if (this.tag.selected) {

                    return `"${this.getLabel()}" is already selected`;

                } else if (this.tag.invalid) {

                    return `No results matches "${this.getLabel()}"`;

                } else {

                    return this.getLabel();

                }

            }

        },

        methods: {

            getLabel() {

                const label = this.tag[this.label];

                if (typeof label !== 'undefined') {

                    return label;

                } else {

                    return this.getValue()

                }

            },
            getValue() {

                const value = this.tag[this.value];

                if (typeof value !== 'undefined') {

                    return value;

                } else {

                    return this.tag.value

                }

            }

        }

    }

</script>