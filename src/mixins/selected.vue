<template>

    <div class="ez-tag__item" :style="style">
        <span class="ez-tag__item-text">{{getLabel()}}</span>
        <span v-if="!disabled" v-on:click="unselect(tag)" class="ez-tag__item-cross">
            <span class="ez-tag__item-cross-line" :style="{ background: style.color }"></span>
            <span class="ez-tag__item-cross-line" :style="{ background: style.color }"></span>
        </span>
    </div>

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

            style() {

                return {
                    background: this.tag.color,
                    color: this.tag.color ? 'white' : 'black',
                    border: `1px solid ${this.tag.color ? this.tag.color : '#dedede'}`
                }

            }

        },

        methods: {

            unselect(tag) {

                this.$emit('unselect', tag)

            },
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