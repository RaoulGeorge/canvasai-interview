import React, { useState } from "react";
import styled from "styled-components/macro";

export default function InputWithTags({onTagUpdated}) {
	const [tags, setTags] = useState([]);
	
	const onKeyUp = (e) => {
		const inputValue = e.target.value.toLowerCase();
		if (e.key === "Enter" && inputValue !== "") {
			if(!tags.includes(inputValue)) {	// to avoid duplicate tags
				const updatedTags = [...tags, inputValue];
				setTags(updatedTags);
				onTagUpdated(updatedTags);
			}
			e.target.value = "";
		}
	}

	const removeTag = (tagToBeRmoved) => {
		const updatedTags = tags.filter(tag => tag !== tagToBeRmoved);
		setTags(updatedTags);
		onTagUpdated(updatedTags);
	}
		
	return (
    <Wrapper>
			<Tags>
				{tags.map((tag, i) => (
					<Tag key={i} onClick={() => removeTag(tag)}>
						<TagName>{tag}</TagName>
					</Tag>
				))}
			</Tags>
			<InputWrapper 
				placeholder="Start typing to search..." 
				onKeyUp={onKeyUp} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	border: 1px solid black;
`;

const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const Tag = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	padding: 0 8px;
	border-radius: 4px;
	margin: 0 8px 8px 0;
	background: blue;
	cursor: pointer;
`;

const TagName = styled.div``;

const InputWrapper = styled.input`
	flex: 1;
	border: none;
	&:focus {
		outline: transparent;
	}
`;
