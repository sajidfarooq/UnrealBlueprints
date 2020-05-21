function select(arg) {
    return document.querySelector(arg);
}
function selectAll(arg) {
    return document.querySelectorAll(arg);
}


const list = document.querySelectorAll('div[data-file]');
for (const item of list) {
    const id = item.getAttribute('id');
    const file = item.getAttribute('data-file');
    const path = `files/${file}`;
    const bp = new BlueprintRenderer(id);
    bp.renderFromFile(path);
}

setTimeout(() => {
    const svgContainer = document.querySelector('#svgContainer');
    const svgs = Array.from(svgContainer.children);
    const listArray = Array.from(list);
    for (let i in svgs) {
        const item = listArray[i];
        const width = item.getAttribute('width');
        const height = item.getAttribute('height');
        svgs[i].setAttribute('width', width);
        svgs[i].setAttribute('height', height);
        item.appendChild(svgs[i]);
    }
}, 200)