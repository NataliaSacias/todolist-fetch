import React, { useState, useEffect } from "react";
import BotonPapelera from "./BotonPapelera";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const confirmarTarea = e => {
		e.preventDefault();
		if (tarea) {
			setListaTareas([...listaTareas, { label: tarea, done: false }]);
			setTarea("");
			updateListaTarea([...listaTareas, { label: tarea, done: false }]);
		}
	};

	const updateListaTarea = toDos => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/NataliaSacias",
			{
				method: "PUT",
				body: JSON.stringify(toDos),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => {
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const getData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/NataliaSacias")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				setListaTareas(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	const eliminarTarea = indice => {
		let tareasEliminadas = listaTareas.filter((task, index) => {
			if (indice != index) return task;
		});
		setListaTareas(tareasEliminadas);
		updateListaTarea(tareasEliminadas);
	};

	return (
		<div className="container">
			<h1>Todo list</h1>
			<form onSubmit={confirmarTarea}>
				<div className="form-row d-flex align-items-center">
					<div className="col-auto">
						<input
							type="text"
							className="form-control mb-2"
							id="inlineFormInput"
							placeholder="Agregar tarea"
							onChange={e => setTarea(e.target.value)}
							value={tarea}
						/>
					</div>

					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2">
							Agregar
						</button>
					</div>
				</div>
			</form>
			<div className="lista">
				{listaTareas.map((obj, i) => {
					return (
						<li
							className="list-group-item d-flex justify-content-between"
							key={i}>
							{obj.label}
							<BotonPapelera />
						</li>
					);
				})}
			</div>
			<div>
				<p>
					{listaTareas.length == 0
						? "no hay tareas"
						: `Hay ${listaTareas.length} tareas pendientes`}
				</p>
			</div>
		</div>
	);
};

export default Lista;
