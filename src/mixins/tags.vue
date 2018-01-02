
<template>

    <div v-on:click.stop="focusInput" class="ez-tag">
        <div v-on:keyup.enter="selectTagFromOption" v-on:keydown.down="nextOption" v-on:keydown.up="prevOption" class="ez-tag__input-container">
            <div class="ez-tag__items">
                <tag-selected v-for="tag in selectedTags" v-on:unselect="unselectTag" :tag="tag"></tag-selected>
                <input v-el:search v-on:keydown.8="unselectLastTag" v-model="input" tabindex="0" type="text" class="ez-tag__input" :placeholder="placeholder">
            </div>
            <div v-if="selectedTags.length" class="ez-tag__clear-items">
                <span v-on:click="clearSelected" class="fa fa-remove"></span>
            </div>
        </div>
        <div v-el:dropdown class="ez-tag__dropdown">
            <div class="ez-tag__option-container">
                <tag-option v-for="tag in filteredTags" v-on:click="selectTag(tag)" :tag="tag" track-by="$index" :class="{'ez-tag__option--active': activeOptionIndex == $index}"></tag-option>
            </div>
            <div v-if="filteredTags.length" v-on:click.stop="closeDropdown" class="ez-tag__close">
                Close
            </div>
        </div>
    </div>

</template>

<style lang="sass-loader">

    .ez-tag {
        border-radius: 3px;
        position: relative;
    }

    .ez-tag__pointer {
         margin: 5px 10px 10px 10px;
         cursor: pointer;
         opacity: 0.6;
         transition: all 0.150s;
     }

    .ez-tag__display{
         cursor: pointer;
     }

    .ez-tag__placeholder {
         opacity: 0.5;
         margin: 5px 10px 10px 10px;
     }

    .ez-tag__input-container {
         border: 1px solid #dedede;
         padding: 10px 10px 5px 10px;
         display: flex;
     }

    .ez-tag__display-container {
        padding: 5px 5px 0 5px;
        display: flex;
    }

    .ez-tag__display-container:hover{
        opacity: 1;
    }

    .ez-tag__items{
         flex-grow: 1;
     }

    .ez-tag__clear-items {
        background: white;
    }

    .ez-tag__clear-items span {
        margin-top: 5px;
        padding: 5px;
        cursor: pointer;
        color: grey;
    }

    .ez-tag__clear-items span:hover{
        color: black;
    }

    .ez-tag__item {
         border-radius: 10px;
         border: 1px solid #dedede;
         padding: 5px 5px 5px 10px;
         display: inline-block;
         margin-right: 5px;
         margin-bottom: 5px;
    }

    .ez-tag__item-text {
         display: inline-block;
         vertical-align: bottom;
    }

    .ez-tag__item-cross {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        width: 2em;
        height: 2em;
        padding: 2px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        transition: all 0.150s;
        opacity: 0.6;
    }

    .ez-tag__item-cross span {
        vertical-align: baseline;
    }

    .ez-tag__item-cross:hover, .ez-tag__item-cross--active {
        opacity: 1;
    }

    .ez-tag__input {
        border: none;
        margin: 5px 5px 10px 5px;
        width: 100%;
    }
    .ez-tag__input:focus {
        outline: none;
    }

    .ez-tag__dropdown {
        position: absolute;
        width: 100%;
        border: 1px solid #dedede;
        border-top: none;
        background: white;
        display: none;
     }

    .ez-tag__option-container {
        overflow-y: auto;
        max-height: 300px;
    }

    .ez-tag__close {
        padding: 10px;
        text-align: center;
        border-top: 1px solid #dedede;
        cursor: pointer;
        transition: all 0.150s;
    }

    .ez-tag__close:hover {
        background: rgba(240, 240, 240, 1);
    }

    .ez-tag__option {
        padding: 10px;
        cursor: pointer;
        transition: all 0.100s;
    }

    .ez-tag__option:nth-child(even) {
         background: rgba(227, 227, 227, 0.1);
     }

    .ez-tag__option:hover, .ez-tag__option--active {
        background: #3498db !important;
        color: white;
    }

    .ez-tag__footer{
         padding: 5px 10px;
         text-align: right;
         border-top: 1px solid #dedede;
    }

</style>

<script>

    import TagOption from './option.vue'
    import TagSelected from './selected.vue'

    export default {

        components: { TagOption, TagSelected },

        data() {

            return {
                input: '',
                selectedTags: [{value: 'kek'}],
                activeOptionIndex: 0
            }

        },

        props: {

            data: {

                default: () => []

            },
            placeholder: {

                default: 'Click here to type'

            }

        },

        computed: {

            inputIsSelected() {

                return !!this.selectedTags.find(tag => tag.value == this.input);

            },
            inputExists() {

                return !!this.allTags.find(tag => tag.value == this.input);

            },
            allTags() {

                return this.unselectedTags.concat(this.selectedTags).map(this.stringifyTagValue);

            },
            unselectedTags() {

                const transformedData = this.data.map(this.stringifyTagValue);

                return transformedData.filter(tag => !this.selectedTags.find(selected => selected.value == tag.value));

            },
            filteredTags() {

                let options = [];

                if (this.input) {

                    if (this.inputIsSelected) {

                        options.push({
                            value: this.input,
                            selected: true
                        })

                    } else if (!this.inputExists) {

                        options.push({
                            value: this.input,
                            new: true
                        })

                    }

                    options = options.concat(this.unselectedTags.filter(tag => tag.value.toString().includes(this.input)));

                } else {

                    options = this.unselectedTags;

                }

                return options;

            }

        },

        watch: {

            activeOptionIndex() {

                this.checkOptionIsInView();

            },
            selectedTags(tags) {

                this.$emit('update', tags);

            },
            unselectedTags(tags) {

                this.focusInput();

            },
            input(input) {

                console.log('input', input);

                this.resetOptionIndex();

                if (input) {

                    this.openDropdown();

                }

            },

        },

        ready() {

            $(document).focusin(e => {

                const search = $(this.$els.search);
                const target = $(e.target);

                if (target.is(search)) {

                    this.openDropdown();

                } else {

                    this.closeDropdown();

                }

            });

            $(document).click(e => {

                this.closeDropdown();

            });

        },

        methods: {

            stringifyTagValue(tag) {

                return Object.assign({}, tag, {
                    value: tag.value.toString()
                })

            },
            closeDropdown(e) {

                const dropdown = $(this.$els.dropdown);

                dropdown.hide();

                this.$nextTick(() => {

                    if (dropdown.is(':hidden')) {

                        this.resetOptionIndex();

                    }

                })

            },
            openDropdown() {

                const dropdown = $(this.$els.dropdown);

                dropdown.show();

                this.$nextTick(() => {

                    if (dropdown.is(':visible')) {

                        this.checkOptionIsInView()

                    }

                })

            },
            clearSelected() {

                this.selectedTags = [];

            },
            selectOptionFromIndex(index) {

                const options = $('.ez-tag__option');
                const option = $(options[index]);

                if (option) {

                    this.checkOptionIsInView(option);

                }

            },
            checkOptionIsInView(option) {

                const activeOption = $('.ez-tag__option--active');

                option = option || activeOption;

                if (option && option.length) {

                    const containerHeight = option.parent().height();
                    const scrollTop = option.parent().scrollTop();
                    const positionTop = option.position().top;

                    if (positionTop < 0 || positionTop > containerHeight) {

                        this.scrollToOption(option);

                    }

                }

            },
            scrollToOption(option) {

                if (option && option.length) {

                    option.parent().scrollTop(option.position().top + option.parent().scrollTop());

                }

            },
            unselectTag(tag) {

                this.selectedTags = this.selectedTags.filter(current => current != tag);

            },
            selectTagFromOption() {

                const option = $('.ez-tag__option--active');

                if (option.length) {

                    option.click();

                }

            },
            selectTag(tag) {

                if (!this.tagIsSelected(tag)) {

                    this.selectedTags.push(tag);

                    if (this.input == tag.value) {

                        this.input = '';

                    }

                    this.$nextTick(() => {

                        this.checkIfActiveOptionExists();

                    })

                }

            },
            checkIfActiveOptionExists() {

                const options = $('.ez-tag__option');

                if (this.activeOptionIndex > options.length - 1) {

                    this.prevOption();

                }

            },
            focusInput() {

                const search = $(this.$els.search);

                search.focus();

            },
            unselectLastTag(e) {

                if (!this.input) {

                    this.selectedTags.pop();

                }

            },
            tagIsSelected(tag) {

                return this.selectedTags.find(selected => selected.value == tag.value)

            },
            setOptionIndex(index) {

                this.activeOptionIndex = index;

            },
            resetOptionIndex() {

                const index = this.inputIsSelected ? 1 : 0;

                this.setOptionIndex(index)

            },
            nextOption() {

                const options = $('.ez-tag__option');
                const index = this.activeOptionIndex;
                const lastIndex = options.length - 1;

                if (index >= lastIndex) {

                    this.setOptionIndex(0);

                } else {

                    this.setOptionIndex(this.activeOptionIndex + 1);

                }

            },
            prevOption() {

                const options = $('.ez-tag__option');
                const index = this.activeOptionIndex;
                const lastIndex = options.length - 1;

                if (index <= 0) {

                    this.setOptionIndex(lastIndex);

                } else {

                    this.setOptionIndex(this.activeOptionIndex - 1);

                }

            }

        }

    };

</script>