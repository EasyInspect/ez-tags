
<template>

    <div class="ez-tag__option">{{display}}</div>

</template>

<script>

    export default {

        props: {

            tag: {

                default: () => {}

            }

        },

        computed: {

            display() {

                if (this.tag.new) {

                    return `Add "${this.tag.value}"`;

                } else if (this.tag.selected) {

                    return `"${this.tag.value} is already selected"`;

                } else {

                    return this.tag.value;

                }

            }

        }

    }

</script>