<template>

    <div v-on:click.stop="focusInput" :class="{'ez-tag--focus': inFocus}" class="ez-tag">
        <div v-on:keyup.enter="selectTagFromOption" v-on:keydown.down="nextOption" v-on:keydown.up="prevOption" :class="{'ez-tag__input-container--open': showDropdown}" class="ez-tag__input-container">
            <div class="ez-tag__items">
                <ez-tags-selected v-for="tag in selectedTags" v-on:unselect="unselectTag" :tag="tag" :label="label" track-by="$index"></ez-tags-selected>
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
            <div class="ez-tag__option-container" tabindex="-1">
                <ez-tags-option v-for="tag in filteredTags" v-on:click="selectTag(tag)" :tag="tag" :label="label" track-by="$index" :class="{'ez-tag__option--active': activeOptionIndex == $index}" track-by="$index"></ez-tags-option>
            </div>
            <div v-if="1<1" v-on:click.stop="closeDropdown" class="ez-tag__close">
                Close
            </div>
        </div>
    </div>

</template>

<script>

    import EzTagsOption from './option.vue'
    import EzTagsSelected from './selected.vue'

    export default {

        components: { EzTagsOption, EzTagsSelected },

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

        beforeDestroy() {

            window.removeEventListener('resize', this.setSearchElementsWidth);

        },

        methods: {

            getElementComputedStyle(element, key) {

                const style = window.getComputedStyle(element);

                return style.getPropertyValue(key);

            },
            setSearchElementsWidth() {

                this.setMeasurementFontSize();

                const searchElement         = this.$els.search;
                const placeholderElement    = this.$els.placeholderMeasurement;
                const measurementElement    = this.$els.searchMeasurement;
                const maxWidth              = searchElement.parentElement.clientWidth;
                const placeholderWidth      = placeholderElement.clientWidth;
                const searchWidth           = measurementElement.clientWidth;
                let newWidth                = searchWidth < placeholderWidth ? placeholderWidth : searchWidth;

                newWidth = (newWidth > maxWidth ? maxWidth : newWidth) + 'px';

                this.$els.search.style.width = newWidth;

            },
            setMeasurementFontSize() {

                const searchElement         = this.$els.search;
                const measurementElements   = document.getElementsByClassName('ez-tag__input-measure');
                const searchFontSize        = this.getElementComputedStyle(searchElement, 'font-size');
                const measureFontSize       = this.getElementComputedStyle(measurementElements[0], 'font-size');

                console.log('search font size', searchFontSize);
                console.log('measure font size', measureFontSize);
                
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

                this.$el.addEventListener('focusin', e => {

                    this.inFocus = true;

                });

                this.$el.addEventListener('focusout', e => {

                    const body      = document.body;
                    const container = this.$el;
                    const target    = e.relatedTarget;

                    if (!target || target == body || target == container || container.contains(target)) {

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