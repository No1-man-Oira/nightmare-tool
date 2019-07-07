const table = document.getElementsByTagName('table')[0];

function setThListener(th) {
    th.addEventListener('click', function () {
        const participation = 'non-participation';

        if (th.className === participation) {
            th.classList.remove(participation);
            th.parentNode.classList.remove('non-active');
        } else {
            th.classList.add(participation);
            th.parentNode.classList.add('non-active');
        }
    }, false);
}

function setTdListener(td) {
    td.addEventListener('click', function () {
        const selectedClasses = document.getElementsByClassName(td.className);
        const removeClasses = [];
        const parentTh = td.parentNode.children[0];

        for (let i = 0; i < selectedClasses.length; i++) {
            const selectedClass = selectedClasses.item(i);

            if (selectedClass.className.match('non-active')) {
                removeClasses.push(selectedClass);
                parentTh.classList.remove('non-participation');
            } else {
                selectedClass.classList.add('non-active');
                td.parentNode.classList.add('non-active');
                parentTh.classList.add('non-participation');
            }
        }
        removeClasses.forEach((removeClass) => {
            removeClass.classList.remove('non-active');
            td.parentNode.classList.remove('non-active');
        })
    }, false);
}

function setTable(data, setRootTr) {
    const th = document.createElement('th');
    th.textContent = data.name;
    setThListener(th);
    setRootTr.appendChild(th);

    for (let i = 1; i < 6; i++) {
        const td = document.createElement('td');
        const nightmareName = data[Object.keys(data)[i]];

        td.textContent = nightmareName;
        if (nightmareName) td.classList.add(nightmareSkill[nightmareName]);
        setTdListener(td);
        setRootTr.appendChild(td);
    }
}

const request = new XMLHttpRequest();

request.open('GET', 'https://script.google.com/macros/s/AKfycbxjfs3VGRvKUnKILKebdG5UOvEoTMpWFvXiHjX_QalOju-BJRc/exec', true);
request.responseType = 'json';

request.onload = function () {
    const data = this.response;
    const tbody = document.createElement('tbody');

    const main = document.createElement('td');
    main.textContent = 'メイン', main.className = 'main';
    const sub = document.createElement('td');
    sub.textContent = 'サブ', sub.className = 'sub';
    const space = document.createElement('td');
    space.setAttribute('colspan', '3');

    const tr1 = document.createElement('tr');
    tr1.appendChild(document.createElement('td'));
    tr1.appendChild(main);
    tr1.appendChild(sub);
    tr1.appendChild(space);

    tbody.appendChild(tr1);

    for (let i = 0; i < 17; i++) {
        const tr = document.createElement('tr');

        if (i === 0 || i === 6) {
            const th = document.createElement('th');
            th.classList.add('position');
            th.textContent = i === 0 ? '前衛ズ' : '後衛ズ';
            th.setAttribute('colspan', '6');

            tr.appendChild(th);
        } else if (i >= 1 && i < 6) {
            setTable(data[i - 1], tr);
        } else if (i >= 7) {
            setTable(data[i - 2], tr);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    document.getElementsByTagName('img')[0].style.display = 'none';
};

request.send();