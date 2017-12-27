
<template>



</template>

<script>

    export default {

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