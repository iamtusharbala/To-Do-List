const addForm = document.querySelector('.add');
const form = document.querySelector('ul');

const generateForm = (input) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${input}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>
`
    form.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = addForm.add.value.trim().toLowerCase();
    addForm.reset();
    if (input.length) {
        generateForm(input);
        // console.log(input);
    }
});

form.addEventListener('click', e => {
   if(e.target.classList.contains('delete')){
    console.log(e.target.parentElement.remove())
   };
})