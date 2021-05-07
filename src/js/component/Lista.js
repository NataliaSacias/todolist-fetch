import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const confirmarTarea = e => {
		e.preventDefault();
		setListaTareas([...listaTareas, { label: tarea, done: false }]);
		setTarea("");
	};

	const eliminarTarea = indice => {
		let tareasEliminadas = listaTareas.filter((task, index) => {
			if (indice != index) return task;
		});
		setListaTareas(tareasEliminadas);
	};

	return (
		<div>
			<form onSubmit={confirmarTarea}>
				<div className="form-row align-items-center">
					<div className="col-auto">
						{/* <label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label> */}
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
						<li key={i}>
							{obj.label}
							<button
								onClick={() => {
									eliminarTarea(i);
								}}
								type="button"
								className="btn btn-outline-danger">
								<i className="fas fa-trash-alt"></i>
							</button>
						</li>
					);
				})}
			</div>
			<div>
				<h6>
					{listaTareas.length == 0
						? "no hay tareas"
						: `hay ${listaTareas.length} tareas`}
				</h6>
			</div>
		</div>
	);
};

export default Lista;
