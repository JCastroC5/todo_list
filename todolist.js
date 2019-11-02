let counter = 0;

const addTask = () => {
    const newTask = document.getElementById('newTaskText');
    const container = document.getElementById('tasksContainer');
    
    if(newTask.value !== ''){
        const divTask = document.createElement('div');
        divTask.innerHTML = `
            <button onClick="remove(${counter})">X</button>
            <span>${newTask.value}</span>
            <input type="checkbox" onChange="changeState(${counter}, this)">
        `;

        container.appendChild(divTask);
        container.appendChild(document.createElement("br"));

        counter++;
        newTask.value = '';
    }
};

const changeState = (row, check) => {
    const container = document.getElementById('tasksContainer');
    const divs = container.getElementsByTagName('div');
    var divSelected = divs[row];
    var spanText = divSelected.getElementsByTagName('span')[0];

    if(check.checked) {
        spanText.classList.add('done');
    } else {
        spanText.classList.remove('done');
    }
};

const remove = row => {
    const container = document.getElementById('tasksContainer');
    const divs = container.getElementsByTagName('div');
    const divSelected = divs[row];
    divSelected.classList.add('removed');
};
