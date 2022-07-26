api_url = "https://api.github.com/users";

// api_url = "http://localhost:5500/";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  show(data);
}

getapi(api_url);

function show(data) {
  let tab = `<tr>
		<th>login</th>
		<th>id</th>
		<th>node_id</th>
		</tr>`;

  Object.entries(data).forEach(
    ([index, login, id, node_id]) =>
      (tab += `<tr>
	<td>${data[index].login} </td>
	<td>${data[index].id}</td>
	<td>${data[index].node_id}</td>		
</tr>`)
  );
  // }

  document.getElementById("employees").innerHTML = tab;
}