const dataTable = document.querySelector('#data-table tbody')

function formSubmit(event) {
	event.preventDefault()

	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const phone = document.getElementById('phone').value
	const password = document.getElementById('password').value
	const gender = document.getElementById('gender').value

	const data = {
		name: name,
		email: email,
		phone: phone,
		password: password,
		gender: gender
	}

	fetch('https://crudcrud.com/api/6bd33de477f8479688656b200343a0b9/inscritos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			console.log('Data successfully sent:', data)
			getData()
		})
		.catch(error => {
			console.error('Error:', error)
		})

	}


function getData() {
	fetch('https://crudcrud.com/api/6bd33de477f8479688656b200343a0b9/inscritos')
		.then(response => response.json())
		.then(data => {
			renderData(data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

function renderData(data) {
	dataTable.innerHTML = ''
	data.forEach(item => {
		const row = document.createElement('tr')
		row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone || ''}</td>
            <td>${item.gender}</td>
        `
		dataTable.appendChild(row)
	})
}

getData()
