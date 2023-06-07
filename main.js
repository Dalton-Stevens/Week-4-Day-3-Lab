const button = document.querySelector(`button`);
const div = document.querySelector(`div`);

const btnClick = () => {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
        .then(response => {
            // console.log(response.data.results)
            let {results} = response.data
            results[0].residents.forEach(item => {
                console.log(item)
                axios.get(item)
                    .then(res => {
                        console.log(res)
                        let h2 = document.createElement(`h2`)
                        h2.textContent = res.data.name
                        div.appendChild(h2)
                    })
            })
        })
        .catch(err => console.log(err))
}
button.addEventListener(`click`, btnClick);