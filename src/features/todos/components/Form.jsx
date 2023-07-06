import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const dispatch = useDispatch();

	const titleChange = (event) => {
		setTitle(event.target.value);
	};
	const bodyChange = (event) => {
		setTitle(event.target.value);
	};

	const onSubmitHandler = () => {
		const newTodo = {
			id: Date.now(),
			title,
			body,
			done: false,
		};

		dispatch(addTodo(newTodo));
		setTitle("");
		setBody("");
		console.log({ title }, { body });
	};

	return (
		<StAddForm onSubmit={onSubmitHandler}>
			<StInputGroup>
				<StFormLabel>제목</StFormLabel>
				<StAddInput type='text' name='title' value={title} onChange={titleChange} />
				<StFormLabel>내용</StFormLabel>
				<StAddInput type='text' name='body' value={body} onChange={bodyChange} />
			</StInputGroup>
			<StAddButton onClick={onSubmitHandler}>추가하기</StAddButton>
		</StAddForm>
	);
};

export default Form;

const StInputGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const StFormLabel = styled.label`
	font-size: 16px;
	font-weight: 700;
`;

const StAddForm = styled.form`
	background-color: #eee;
	border-radius: 12px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	gap: 20px;
`;

const StAddInput = styled.input`
	height: 40px;
	width: 240px;
	border: none;
	border-radius: 12px;
	padding: 0 12px;
`;

const StAddButton = styled.button`
	border: none;
	height: 40px;
	cursor: pointer;
	border-radius: 10px;
	background-color: teal;
	width: 140px;
	color: #fff;
	font-weight: 700;
`;
