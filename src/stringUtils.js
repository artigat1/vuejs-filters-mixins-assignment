export const stringUtils = {
    data() {
        return {
            text: 'Hello world!'
        }
    },
    computed: {
        reverseComputed() {
            return this.text.split('').reverse().join('');
        },
        letterCount() {
            return `${this.text} (${this.text.split('').length})`;
        }
    }
};
