<template>

    <div v-on:click.stop="focusInput" :class="{'ez-tag--focus': inFocus}" class="ez-tag">
        <div v-on:keyup.enter="selectTagFromOption" v-on:keydown.down="nextOption" v-on:keydown.up="prevOption" :class="{'ez-tag__input-container--open': showDropdown}" class="ez-tag__input-container">
            <div class="ez-tag__items">
                <tag-selected v-for="tag in selectedTags" v-on:unselect="unselectTag" :tag="tag" :label="label" track-by="$index"></tag-selected>
                <input v-el:search v-on:keydown.8="unselectLastTag" v-model="input" tabindex="0" type="text" class="ez-tag__input" :placeholder="placeholder">
                <div v-el:placeholder-measurement class="ez-tag__input-measure">{{placeholder}}</div>
                <div v-el:search-measurement class="ez-tag__input-measure">{{input}}</div>
            </div>
            <div v-if="selectedTags.length" class="ez-tag__clear-items">
                <span v-on:click.stop="clearSelected" class="ez-tag__item-cross">
                    <span class="ez-tag__item-cross-line"></span>
                    <span class="ez-tag__item-cross-line"></span>
                </span>
            </div>
        </div>
        <div v-if="showDropdown" v-el:dropdown class="ez-tag__dropdown">
            <div class="ez-tag__option-container">
                <tag-option v-for="tag in filteredTags" v-on:click="selectTag(tag)" :tag="tag" :label="label" track-by="$index" :class="{'ez-tag__option--active': activeOptionIndex == $index}" track-by="$index"></tag-option>
            </div>
            <div v-if="1<1" v-on:click.stop="closeDropdown" class="ez-tag__close">
                Close
            </div>
        </div>
    </div>

</template>

<style lang="sass-loader">

    .ez-tag {
        position: relative;
        box-sizing: border-box;
        cursor: text;
    }

    .ez-tag * {
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

    .ez-tag--focus .ez-tag__input-container {
        outline: 0;
        border-color: #66afe9;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }

    .ez-tag__input-container {
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        padding: 10px 10px 5px 10px;
        display: flex;
    }

    .ez-tag__input-container--focus {

    }
    .ez-tag__input-container--open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
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

    .ez-tag--focus .ez-tag__dropdown {
        outline: 0;
        border-color: #66afe9;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }

    .ez-tag__dropdown {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        background: white;
        width: 100%;
        border: 1px solid #ccc;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .ez-tag__option-container {
        overflow-y: auto;
        max-height: 300px;
    }

    .ez-tag__close {
        padding: 10px;
        text-align: center;
        border-top: 1px solid #ccc;
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
        border-top: 1px solid #ccc;
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
                activeOptionIndex: 0,
                inFocus: false
            }

        },

        props: {

            label: {

                default: 'value'

            },
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

            showDropdown() {

                console.log('show dropdown?', this.filteredTags.length, this.inFocus, !!(this.filteredTags.length && this.inFocus));
                return !!(this.filteredTags.length && this.inFocus)

            },
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

                newWidth = (newWidth > maxWidth ? maxWidth : newWidth) + 'px';

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

                    const container = this.$el;
                    const target    = e.target;

                    if (target == container || container.contains(target)) {

                        this.inFocus = true;

                    } else {

                        this.inFocus = false;

                    }

                });

                document.addEventListener('click', e => {

                    this.inFocus = false;

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