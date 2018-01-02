<template>

    <div class="ez-tag__item" :style="style">
        <span class="ez-tag__item-text">{{tag.value}}</span>
        <span v-on:click="unselect(tag)" class="ez-tag__item-cross">
            <span class="fa fa-remove"></span>
        </span>
    </div>

</template>

<script>

    export default {

        props: {

            tag: {

                default: () => {}

            }

        },

        computed: {

            style() {

                return {
                    background: this.tag.color,
                    color: this.tag.color ? 'white' : 'black'
                }

            }

        },

        methods: {

            unselect(tag) {

                this.$emit('unselect', tag)

            }

        }

    }

</script>