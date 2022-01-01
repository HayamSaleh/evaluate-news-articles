// import { JSON } from "body-parser"

export async function handleSubmit(event) {
  event.preventDefault()

  const articleUrl = document.getElementById('article-url').value;
  const isValidUrl = Client.validateUrl(articleUrl);

  if(isValidUrl){
    await fetch('http://localhost:8081/hayam', {
      method: 'POST',
      body: JSON.stringify({articleUrl}),
    })
    .then(async res => (
      await res.json()
    ))
    .then((res) => {
      console.log(res);
      document.getElementById('agreement').innerHTML = res.agreement
      document.getElementById('subjectivity').innerHTML = res.subjectivity
      document.getElementById('confidence').innerHTML = res.confidence
      document.getElementById('subjectivity').innerHTML = res.subjectivity
      document.getElementById('irony').innerHTML = res.irony
      document.getElementById('score_tag').innerHTML = res.score_tag
    })
  } else {
    alert('Invalid URL, please Enter a valid one');
  }

}
