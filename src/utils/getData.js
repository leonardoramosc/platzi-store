const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(res => res)
    .catch(err => err);
}

export default getData;