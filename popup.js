document.getElementById('sendButton').addEventListener('click', function() {
    alert('Message sent! But not really. This was just a practice run.');
    document.getElementById('toField').value = '';
    document.getElementById('subjectField').value = '';
    document.getElementById('messageField').value = '';
  });
  