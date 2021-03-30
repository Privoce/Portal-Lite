chrome.storage.sync.get(null, function (items) {
  // Notify that we saved.
  console.log('all local items', items);
  if (items) {
    let fragments = document.createDocumentFragment();
    Object.keys(items).forEach((key) => {
      let item = document.createElement('li');
      item.classList.add('item');
      item.setAttribute('data-key', key);
      item.style.cursor = 'pointer';
      item.title = 'Click to remove';
      item.innerHTML = items[key];
      item.addEventListener('click', (evt) => {
        console.log(evt.target);
        let currItemEle = evt.target;
        let key = currItemEle.dataset.key;
        if (key) {
          chrome.storage.sync.remove(key, (resp) => {
            console.log('remove', resp);
            currItemEle.remove();
          });
        }
      });
      fragments.appendChild(item);
    });
    let localList = document.querySelector('.locals');
    localList.appendChild(fragments);
  }
});
