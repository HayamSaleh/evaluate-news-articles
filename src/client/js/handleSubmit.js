async function handleSubmit(event) {
  event.preventDefault()

  const articleUrl = document.getElementById('article-url').value;
  const isValidUrl = Client.validateUrl(articleUrl);

  if(isValidUrl){
    await fetch('http://localhost:8081/article', {
      method: 'POST',
      body: JSON.stringify({articleUrl}),
    })
    .then(async res => (
      await res.json()
    ))
    .then((res) => {
      document.getElementById('agreement').innerHTML = res.agreement
      document.getElementById('subjectivity').innerHTML = res.subjectivity
      document.getElementById('subjectivity').innerHTML = res.subjectivity
      document.getElementById('irony').innerHTML = res.irony
      document.getElementById('score_tag').innerHTML = res.score_tag
      document.getElementById('confidence').innerHTML = res.confidence
    })
  } else {
    alert('Invalid URL, please Enter a valid one');
  }
}

module.exports = handleSubmit;
