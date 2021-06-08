const getData = async(url) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url},
      received ${res.statusText}`)
    } 
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default getData



