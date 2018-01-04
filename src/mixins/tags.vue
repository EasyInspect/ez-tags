<template>

    <div v-on:click.stop="focusInput" class="ez-tag">
        <div v-on:keyup.enter="selectTagFromOption" v-on:keydown.down="nextOption" v-on:keydown.up="prevOption"
             class="ez-tag__input-container">
            <div class="ez-tag__items">
                <tag-selected v-for="tag in selectedTags" v-on:unselect="unselectTag" :tag="tag" track-by="$index"></tag-selected>
                <input v-el:search v-on:keydown.8="unselectLastTag" v-model="input" tabindex="0" type="text" class="ez-tag__input" :placeholder="placeholder">
                <div v-el:placeholder-measurement class="ez-tag__input-measure">{{placeholder}}</div>
                <div v-el:search-measurement class="ez-tag__input-measure">{{input}}</div>
            </div>
            <div v-if="selectedTags.length" class="ez-tag__clear-items">
                <span v-on:click="clearSelected" class="ez-tag__item-cross">
                    <span class="ez-tag__item-cross-line"></span>
                    <span class="ez-tag__item-cross-line"></span>
                </span>
            </div>
        </div>
        <div v-if="filteredTags.length" v-el:dropdown class="ez-tag__dropdown">
            <div class="ez-tag__option-container">
                <tag-option v-for="tag in filteredTags" v-on:click="selectTag(tag)" :tag="tag" track-by="$index" :class="{'ez-tag__option--active': activeOptionIndex == $index}" track-by="$index"></tag-option>
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
        box-sizing: border-box;
    }

    .ez-tag__pointer {
        margin: 5px 10px 10px 10px;
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.150s;
    }

    .ez-tag__display {
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

    .ez-tag__display-container:hover {
        opacity: 1;
    }

    .ez-tag__items {
        width: calc(100% - 15px);
    }

    .ez-tag__clear-items {
        background: white;
        width: 15px;
        position: relative;
    }

    .ez-tag__item {
        border-radius: 10px;
        border: 1px solid #dedede;
        padding: 5px 20px 5px 10px;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 5px;
        position: relative;
    }

    .ez-tag__item-text {
        display: inline-block;
        vertical-align: bottom;
    }

    .ez-tag__item-cross {
        position: absolute;
        right: 0;
        top: 5px;
        font-size: 5px;
        width: 3em;
        height: 3em;
        opacity: 0.5;
        cursor: pointer;
    }

    .ez-tag__item-cross-line {
        font-size: inherit;
        position: absolute;
        content: ' ';
        height: 2em;
        width: 2px;
        background-color: #333;
        top: 0.75em;
        left: 1em;
        cursor: pointer;
    }

    .ez-tag__item-cross-line:nth-child(odd) {
        transform: rotate(45deg);
    }

    .ez-tag__item-cross-line:nth-child(even) {
        transform: rotate(-45deg);
    }

    .ez-tag__item-cross:hover, .ez-tag__item-cross--active {
        opacity: 1;
    }

    .ez-tag__input {
        border: none;
        padding: 5px 5px 10px 5px;
    }

    .ez-tag__input:focus {
        outline: none;
    }

    .ez-tag__input-measure{
        position: absolute;
        visibility: hidden;
        display: inline-block;
        white-space: nowrap;
    }

    .ez-tag__dropdown {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        border: 1px solid #dedede;
        border-top: none;
        background: white;
        display: none;
        width: calc(100% - 2px);
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
        word-wrap: break-word;
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

    .ez-tag__footer {
        padding: 5px 10px;
        text-align: right;
        border-top: 1px solid #dedede;
    }

</style>

<script>

    import TagOption from './option.vue'
    import TagSelected from './selected.vue'

    export default {

        components: {TagOption, TagSelected},

        data() {

            return {
                input: '',
                selectedTags: [],
                activeOptionIndex: 0
            }

        },

        props: {

            allowNew: {

                default: true

            },
            options: {

                default: () => []

            },
            selected: {

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

                const transformedData = this.options.map(this.stringifyTagValue);

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

                        if (this.allowNew) {

                            options.push({
                                value: this.input,
                                new: true
                            })

                        } else {

                            options.push({
                                value: this.input,
                                invalid: true
                            })

                        }

                    }

                    options = options.concat(this.unselectedTags.filter(tag => tag.value.toString().includes(this.input)));

                } else {

                    options = this.unselectedTags;

                }

                return this.removeDuplicates(options, 'value');

            }

        },

        watch: {

            activeOptionIndex() {

                this.checkOptionIsInView();

            },
            selected(tags) {

                this.selectTags(tags);

            },
            selectedTags(tags) {

                this.$emit('update', tags);

            },
            input(input) {

                this.setSearchElementsWidth();
                this.resetOptionIndex();

                if (input) {

                    this.openDropdown();

                }

            },

        },

        created() {

            if (this.selected) {

                this.selectTags(this.selected);

            }

        },

        ready() {

            window.addEventListener('resize', this.setSearchElementsWidth);

            this.setSearchElementsWidth();
            this.addFocusListeners();

        },

        methods: {

            getElementComputedStyle(element, key) {

                const style = window.getComputedStyle(element);

                console.log('padding:', element, key, style.getPropertyValue(key));

                return style.getPropertyValue(key);

            },
            setSearchElementsWidth() {

                const searchElement         = this.$els.search;
                const placeholderElement    = this.$els.placeholderMeasurement;
                const measurementElement    = this.$els.searchMeasurement;
                const maxWidth              = searchElement.parentElement.clientWidth;
                const placeholderWidth      = placeholderElement.clientWidth;
                const searchWidth           = measurementElement.clientWidth;
                const paddingLeft           = parseFloat(this.getElementComputedStyle(searchElement, 'padding-left').slice(0, -2));
                const paddingRight          = parseFloat(this.getElementComputedStyle(searchElement, 'padding-right').slice(0, -2));
                let newWidth                = searchWidth < placeholderWidth ? placeholderWidth : searchWidth;

                newWidth = (newWidth > maxWidth ? maxWidth : newWidth) - (paddingLeft + paddingRight) + 'px';

                // TODO Remove padding left + padding right from final width
                // call this function on window resize aswell
                // add cross to clear all

                console.log('input', this.input);
                console.log('max width', maxWidth);
                console.log('input width', searchWidth);
                console.log('placeholder width', placeholderWidth);
                console.log('padding', paddingLeft, paddingRight);
                console.log('final width', newWidth);

                this.$els.search.style.width = newWidth;

            },
            removeDuplicates(array, key) {

                let defaultResult = {
                    uniqueValues: {},
                    items: []
                };

                const uniques = array.reduce((result, current) => {

                    const value = current[key];
                    const isUnique = typeof result.uniqueValues[value] == 'undefined';

                    if (isUnique) {

                        result.uniqueValues[value] = true;
                        result.items.push(current);

                    }

                    return result;

                }, defaultResult).items;

                return uniques;

            },
            addFocusListeners() {

                document.addEventListener('focusin', e => {

                    const search = this.$els.search;
                    const target = e.target;

                    if (target == search) {

                        this.openDropdown();

                    } else {

                        this.closeDropdown();

                    }

                });

                document.addEventListener('click', e => {

                    this.closeDropdown();

                });

            },
            stringifyTagValue(tag) {

                return Object.assign({}, tag, {
                    value: tag.value.toString()
                })

            },
            closeDropdown(e) {

                const dropdown = this.$els.dropdown;

                if (dropdown) {

                    dropdown.style.display = 'none';

                    this.$nextTick(() => {

                        if (dropdown.style.display == 'none') {

                            this.resetOptionIndex();

                        }

                    })

                }

            },
            openDropdown() {

                const dropdown = this.$els.dropdown;

                if (dropdown) {

                    dropdown.style.display = 'block';

                    this.$nextTick(() => {

                        if (dropdown.style.display != 'none') {

                            this.checkOptionIsInView()

                        }

                    })

                }

            },
            clearSelected() {

                this.selectedTags = [];

            },
            selectOptionFromIndex(index) {

                const options = document.getElementsByClassName('ez-tag__option');
                const option = options[index];

                if (option) {

                    this.checkOptionIsInView(option);

                }

            },
            checkOptionIsInView(option) {

                const activeOption = document.getElementsByClassName('ez-tag__option--active')[0];

                option = option || activeOption;

                if (option) {

                    const containerHeight = option.parentElement.offsetHeight;
                    const scrollTop = option.parentElement.scrollTop;
                    const positionTop = option.offsetTop;

                    if (positionTop < 0 || positionTop > containerHeight || positionTop < scrollTop) {

                        this.scrollToOption(option);

                    }

                }

            },
            scrollToOption(option) {

                if (option) {

                    const parent = option.parentElement;

                    parent.scrollTop = option.offsetTop;

                }

            },
            unselectTag(tag) {

                this.selectedTags = this.selectedTags.filter(current => current != tag);

            },
            selectTagFromOption() {

                const option = document.getElementsByClassName('ez-tag__option--active')[0];

                if (option) {

                    option.click();

                }

            },
            canSelectTag(tag) {

                const whitespaceRegex   = /^\s*|\s*\Z|\s\B/g;
                const value             = typeof tag.value == 'string' ? tag.value.replace(whitespaceRegex, '') : tag.value;
                const hasValue          = typeof value == 'number' ? true : !!value;
                const isUnique          = !this.tagIsSelected(tag);
                const isValid           = !tag.invalid;

                return !!(isUnique && isValid && hasValue);

            },
            addTagToSelected(tag) {

                if (this.canSelectTag(tag)) {

                    this.selectedTags.push(tag);

                }

            },
            selectTags(tags) {

                tags.forEach(this.addTagToSelected);

                this.$nextTick(() => {

                    this.checkIfActiveOptionExists();

                })

            },
            selectTag(tag) {

                if (this.canSelectTag(tag)) {

                    this.selectedTags.push(tag);

                    if (this.input == tag.value) {

                        this.input = '';

                    }

                    this.$nextTick(this.checkIfActiveOptionExists)

                }

            },
            checkIfActiveOptionExists() {

                const options = document.getElementsByClassName('ez-tag__option');

                if (this.activeOptionIndex > options.length - 1) {

                    this.prevOption();

                }

            },
            focusInput() {

                const search = this.$els.search;

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

                const options = document.getElementsByClassName('ez-tag__option');
                const index = this.activeOptionIndex;
                const lastIndex = options.length - 1;

                if (index >= lastIndex) {

                    this.setOptionIndex(0);

                } else {

                    this.setOptionIndex(this.activeOptionIndex + 1);

                }

            },
            prevOption() {

                const options = document.getElementsByClassName('ez-tag__option');
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