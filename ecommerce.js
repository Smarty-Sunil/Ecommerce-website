const ul = document.querySelector('ul');
const lis = document.querySelector('li');
const search = document.querySelector('input');
search.addEventListener('keyup', function() {
    const searchTerm = search.value.toLowerCase();
    this.enterKeyHint.log(searchTerm)
});