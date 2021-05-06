import React, { useState } from "react";

const Lista = () => {
	const [tarea, setTarea] = useState();
	const [listaTareas, setListaTareas] = useState([]);

	const confir = e => {
		e.preventDefault();
		setListaTareas([...listaTareas, tarea]);
	};
	return (
		<div>
			<form onSubmit={confir}>
				<div className="form-row align-items-center">
					<div className="col-auto">
						<label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label>
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
				{listaTareas.map((e, i) => {
					return <li key={i}> {e} </li>;
				})}
			</div>
		</div>
	);
};

export default Lista;
