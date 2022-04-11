
setTimeout(() => {
  window.dispatchEvent(new KeyboardEvent('keydown', {
    'key': 'f',
    ctrlKey: true
  }));
  window.dispatchEvent(new KeyboardEvent('keydown', {
    'key': 't',
    ctrlKey: false
  }));
}, 2000);