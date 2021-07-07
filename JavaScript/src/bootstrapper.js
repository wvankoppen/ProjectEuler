const demos = [];

export const demo = (func) => {
    demos.push({ name: func.name, func });
};

export const render = () => {
    const toolbar = document.getElementById('toolbar');
    demos.forEach((demo) => {
        const button = document.createElement('button');
        button.innerText = demo.name;
        button.addEventListener('click', demo.func);
        toolbar.appendChild(button);
    });
};
window.onload = render;

export const log = console.log;
export const error = console.log;
